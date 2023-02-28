import { Grid } from "gridjs-react"
import { esES } from "gridjs/l10n"

export default function GridJS ({data, columns, search = true, sort = true, pagination = 5}) {

  return <Grid
    columns={columns}
    data={data}
    search={search}
    pagination={{
        limit: pagination,
      }}
    sort={sort}
    className= {{
        table: 'w-full table mt-6',
        search: '[&>*]:input [&>*]:input-bordered [&>*]:input-primary mt-6 ml-2',
        footer: 'p-2 bg-base-200 text-center',
        paginationButtonNext: 'ml-2 btn btn-outline btn-primary xs:hidden',
        paginationButtonPrev: 'mr-2 btn btn-outline btn-primary xs:hidden',
        paginationButton: 'btn btn-outline btn-xs btn-primary mx-1',
        paginationButtonCurrent: 'btn btn-primary btn-xs btn-active',
        pagination: 'md:flex md:justify-between',
        loading: 'text-center',
        error: 'text-center',
        notfound: 'text-center',
        tr: '[&>td]:hover:bg-base-200',
        th: 'hover:bg-base-300',
    }}
    language= {esES}
  />
}
