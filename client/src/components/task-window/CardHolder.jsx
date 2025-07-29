import { Ellipsis, Square } from 'lucide-react';
import { SquarePlus } from 'lucide-react';

function CardHolder({color, progressBar}) {
    return (
        <main className='max-w-[450px] p-3 flex flex-col items-center justify-center bg-stone-200/50 dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300'>
            <div className='w-full flex justify-between items-center mb-5'>
                <div className='flex items-center gap-2'>
                    <div className={`w-3 h-3 rounded-full`} style={{backgroundColor: color}}></div>
                    <h2 className='text-lg font-semibold text-gray-700 dark:text-gray-200'>{progressBar}</h2>
                </div>
                <Ellipsis className='text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-800 dark:hover:text-gray-200' />
            </div>
            <div className='flex flex-col gap-3 w-full'>
                <div className='group min-w-[350px] cursor-pointer bg-white hover:scale-[1.02] active:scale-[0.98] hover:bg-stone-400/60 hover:dark:bg-blue-400/60 rounded-sm flex justify-center items-center gap-2 px-5 py-3 transition-all duration-200 ease-in-out'>
                    <p className='text-black/80 font-semibold group-hover:text-stone-50 transition-colors duration-200'>Add Task</p>
                    <SquarePlus className='text-black/80 group-hover:text-stone-50 transition-colors duration-200' />
                </div>
            </div>
        </main>
    )
}

export default CardHolder;
