import { Ellipsis } from 'lucide-react';
import { Flag } from 'lucide-react';
import { Link2 } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

function Card({cardTitle, cardDescription, priority, tags, timeLeft, links, comments}) {
    return (
        <main className='w-full min-h-60 min-w-80 p-2 rounded-md bg-stone-100 flex flex-col justify-center items-center gap-5'>
            <div className='w-full flex justify-between items-center'>
                <h1 className='text-lg font-semibold text-stone-900'>{cardTitle}</h1>
                <Ellipsis />
            </div>

            <div className='w-full max-h-24'>
                <p className='text-sm text-stone-700 text-left text-ellipsis'>{cardDescription}</p>
            </div>

            <div className='w-full flex justify-between items-center'>
                <div className='flex justify-center items-center gap-2'>
                    <div className={`rounded bg-${priority == "high" ? "bg-red-500/60" : priority == "medium" ? "bg-purple-500/60" : "bg-green-500/60"} w-5 h-3}`}>{priority}</div>
                    <div className={`rounded bg-${tags == "web" ? "bg-blue-400/80" : tags == "design" ? "bg-cyan-400/80" : "bg-emerald-400/80"} w-5 h-3}`}>{priority}</div>
                </div>
                <div className='flex gap-1 justify-center items-center'>
                    <Flag />
                    <p className='text-xs text-stone-600 text-left'>{timeLeft}</p>
                </div>
                <div className='w-full flex justify-end items-center gap-2'>
                    <div className='flex gap-0.5 justify-center items-center'>
                        <Link2 />
                        <p className='text-xs text-stone-500 text-left'>{links}</p>
                    </div>
                    <div className='flex gap-0.5 justify-center items-center'>
                        <MessageCircle />
                        <p className='text-xs text-stone-500 text-left'>{comments}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Card;