import { useState } from 'react';

import { ArrowRight, Calendar, MapPin, Settings2, UserRoundPlus } from 'lucide-react';

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState<boolean>(false);

  const openGuestsInput = () => {
    setIsGuestsInputOpen(true);
  }

  const closeGuestsInput = () => {
    setIsGuestsInputOpen(false);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src="/Logo.svg" alt="plann.er" className=' w-[172px] h-11' />
          <p className="text-zinc-300">Convide seus amigos e planeie sua próxima viagem.</p>
        </div>

        <div className='space-y-4'>
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className='flex items-center gap-2 flex-1'>
              <MapPin className='size-5 text-zinc-400' />
              <input type="text" disabled={isGuestsInputOpen} placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className='size-5 text-zinc-400' />
              <input type="text" disabled={isGuestsInputOpen} placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 outline-none" />
            </div>

            <div className='w-px h-6 bg-zinc-800' />

            {isGuestsInputOpen ?
              <button onClick={closeGuestsInput} className="bg-zinc-800 hover:bg-zinc-900 text-zinc-200  rounded-lg py-2 px-5 font-medium flex items-center gap-2">
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
              :
              <button onClick={openGuestsInput} className="bg-lime-300 hover:bg-lime-400 text-lime-950  rounded-lg py-2 px-5 font-medium flex items-center gap-2">
                Continuar
                <ArrowRight className="size-5" />
              </button>
            }
          </div>



          {isGuestsInputOpen &&
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <div className='flex items-center gap-2 flex-1'>
                <UserRoundPlus className='size-5 text-zinc-400' />
                <input type="text" placeholder="Quem estará na viagem?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
              </div>

              <div className='w-px h-6 bg-zinc-800' />

              <button className="bg-lime-300 hover:bg-lime-400 text-lime-950  rounded-lg py-2 px-5 font-medium flex items-center gap-2">
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          }
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda<br />
          com nossos <a href="#" className="text-zinc-300 underline"> termos de uso</a> e
          <a href="#" className="text-zinc-300 underline"> políticas de privacidade </a>.
        </p>
      </div>
    </div>
  );
}

