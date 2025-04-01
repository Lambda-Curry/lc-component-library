import React, { FC, ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import { z } from 'zod';
import { useQueryState } from 'nuqs';
import { Table, TableProps } from '../table';
import { Pagination } from '../pagination';

import './data-table.css';

export interface DataTableColumn<T> {
  header: string;
  accessor: keyof T;
  render?: (value: any, row: T) => ReactNode;
}

export interface DataTableFilter<T> {
  name: string;
  label: string;
  schema: z.ZodType<any>;
  component: FC<{
    value: any;
    onChange: (value: any) => void;
    label: string;
  }>;
  defaultValue?: any;
}

export interface DataTableProps<T> extends Omit<TableProps, 'children'> {
  data: T[];
  columns: DataTableColumn<T>[];
  filters?: DataTableFilter<T>[];
  itemsPerPage?: number;
  onFilterChange?: (filters: Record<string, any>) => void;
}

export function DataTable<T>({
  data,
  columns,
  filters = [],
  className,
  itemsPerPage = 10,
  onFilterChange,
  ...props
}: DataTableProps<T>) {
  // Set up filter state with nuqs
  const filterStates = useMemo(() => {
    return filters.map(filter => {
      const [value, setValue] = useQueryState(
        filter.name,
        {
          defaultValue: filter.defaultValue ?? null,
          parse: (value) => {
            try {
              const parsed = filter.schema.parse(JSON.parse(value));
              return parsed;
            } catch (e) {
              return filter.defaultValue ?? null;
            }
          },
          serialize: (value) => {
            return JSON.stringify(value);
          }
        }
      );
      
      return { filter, value, setValue };
    });
  }, [filters]);

  // Set up pagination
  const [page, setPage] = useQueryState('page', {
    defaultValue: 1,
    parse: (value) => {
      const parsed = parseInt(value, 10);
      return isNaN(parsed) || parsed < 1 ? 1 : parsed;
    },
    serialize: (value) => value.toString()
  });

  // Apply filters to data
  const filteredData = useMemo(() => {
    let result = [...data];
    
    // Apply each active filter
    const activeFilters: Record<string, any> = {};
    
    filterStates.forEach(({ filter, value }) => {
      if (value !== null && value !== undefined) {
        activeFilters[filter.name] = value;
      }
    });
    
    // Notify parent component about filter changes
    if (onFilterChange) {
      onFilterChange(activeFilters);
    }
    
    return result;
  }, [data, filterStates, onFilterChange]);

  // Paginate data
  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, page, itemsPerPage]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className={classNames('lc-data-table', className)}>
      {filters.length > 0 && (
        <div className="lc-data-table-filters">
          {filterStates.map(({ filter, value, setValue }) => (
            <div key={filter.name} className="lc-data-table-filter">
              <filter.component
                value={value}
                onChange={setValue}
                label={filter.label}
              />
            </div>
          ))}
        </div>
      )}
      
      <div className="lc-data-table-wrapper">
        <Table {...props}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.accessor as string}>{column.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <td key={`${rowIndex}-${column.accessor as string}`}>
                    {column.render
                      ? column.render(row[column.accessor], row)
                      : row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      
      {totalPages > 1 && (
        <div className="lc-data-table-pagination">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      )}
    </div>
  );
}