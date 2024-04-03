import { Search, MoreHorizontal, ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight } from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'

export function AttendeeList() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <h1 className="font-bold text-2xl">Participantes</h1>
                <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
                    <Search className="size-4 text-emerald-300" />
                    <input className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm" placeholder="Buscar participante..." />
                </div>
            </div>

            <Table>
                <thead >
                    <tr className="border-b border-white/10">
                        <TableHeader style={{ width: 16 }} >
                            <input className='size-4 bg-black/20 rounded border border-white/10 ' type="checkbox" />
                        </TableHeader>
                        <TableHeader>Código</TableHeader>
                        <TableHeader>Participante</TableHeader>
                        <TableHeader>Data de Inscrição</TableHeader>
                        <TableHeader>Data do check-in</TableHeader>
                        <TableHeader style={{ width: 64 }}></TableHeader>
                    </tr>
                </thead>

                <tbody>
                    {Array.from({ length: 10 }).map((_, i) => {
                        return (<TableRow key={i}>
                            <TableCell>
                                <input className='size-4 bg-black/20 rounded border border-white/10 ' type="checkbox" />
                            </TableCell>
                            <TableCell>123468</TableCell>
                            <TableCell>
                                <div className='flex flex-col gap-1'>
                                    <span className="font-semibold text-white">Diego Schell Fernandes</span>
                                    <span>diego.schell.f@gmail.com</span>
                                </div>
                            </TableCell>
                            <TableCell>7 dias atrás</TableCell>
                            <TableCell>7 dias atrás</TableCell>
                            <TableCell>
                                <IconButton transparent>
                                    <MoreHorizontal className="size-4" />
                                </IconButton>
                            </TableCell>
                        </TableRow>)
                    })}
                </tbody>

                <tfoot>
                    <tr>
                        <TableCell colSpan={3}>
                            Mostrando 10 de 228 itens
                        </TableCell>
                        <TableCell className=" text-right" colSpan={3}>
                            <div className='inline-flex items-center gap-8'>
                                <span>Página 1 de 23</span>
                                <div className='flex gap-1.5'>
                                    <IconButton>
                                        <ChevronsLeft className="size-4" />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronLeft className="size-4" />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronRight className="size-4" />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronsRight className="size-4" />
                                    </IconButton>
                                </div>
                            </div>
                        </TableCell>
                    </tr>
                </tfoot>
            </Table>
        </div >

    )
}