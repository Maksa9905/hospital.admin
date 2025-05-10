import {
  useQueryParams,
  NumberParam,
  withDefault,
  SetQuery,
  QueryParamConfig,
} from 'use-query-params'
import { useCallback, useMemo } from 'react'

import { DEFAULT_LIMIT, DEFAULT_PAGE } from '#/shared/lib'
import { MRT_PaginationState } from 'material-react-table'
import { OnChangeFn } from '@tanstack/table-core'

interface UseTablePaginationQueryResult {
  pagination: MRT_PaginationState
  onPaginationChange: OnChangeFn<MRT_PaginationState>
  params: {
    page: number
    limit: number
  }
  setQuery: SetQuery<{
    page: QueryParamConfig<number | null | undefined, number>
    limit: QueryParamConfig<number | null | undefined, number>
  }>
}

export const useTablePaginationQuery = (): UseTablePaginationQueryResult => {
  const [{ page, limit }, setQuery] = useQueryParams(
    {
      page: withDefault(NumberParam, DEFAULT_PAGE),
      limit: withDefault(NumberParam, DEFAULT_LIMIT),
    },
    { updateType: 'replaceIn' },
  )

  const pagination: MRT_PaginationState = useMemo(
    () => ({
      pageIndex: page - 1,
      pageSize: limit,
    }),
    [limit, page],
  )

  const onPaginationChange = useCallback<OnChangeFn<MRT_PaginationState>>(
    (updater) => {
      if (typeof updater === 'object') {
        setQuery({
          limit: updater.pageSize,
          page: updater.pageIndex + 1,
        })
      } else {
        setQuery((prevQuery) => {
          const nextParams = updater({
            pageIndex: prevQuery.page - 1,
            pageSize: prevQuery.limit,
          })

          return {
            page: nextParams.pageIndex + 1,
            limit: nextParams.pageSize,
          }
        })
      }
    },
    [setQuery],
  )

  const params = useMemo(
    () => ({
      page,
      limit,
    }),
    [page, limit],
  )

  return { pagination, onPaginationChange, params, setQuery }
}
