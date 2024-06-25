import React, {FC} from 'react';
import './App.css';
import Character from "./components/character/Character";

const App: FC = () => {
  return (
    <>
      <Character name={'Arhtur Morgan'}
                 image={'https://www.pngfind.com/pngs/m/214-2140558_the-van-der-linde-red-dead-redemption-2.png'}>
          Arthur Morgan is a central character and the primary protagonist of Red Dead Redemption 2.
      </Character>
      <Character name={'John Marston'}
                 image={'https://www.pngfind.com/pngs/m/500-5005601_red-dead-redemption-red-dead-redemption-2-grand.png'}>
          John Marston is a recurring character in the Red Dead series, appearing as a central character and the primary protagonist of Red Dead Redemption and its non-canon Undead Nightmare expansion pack, and is a central character and the secondary protagonist of Red Dead Redemption 2.
      </Character>
      <Character name={'Dutch Van Der Linde'}
                 image={'https://www.pngfind.com/pngs/m/392-3927236_red-dead-redemption-2-dutch-png-download-dutch.png'}>
          Dutch van der Linde is a recurring character in the Red Dead series, appearing as a central character and the secondary antagonist of Red Dead Redemption, as well as a central character in Red Dead Redemption 2.
      </Character>
      <Character name={'Xavier Escuella'}
                 image={'https://www.pngfind.com/pngs/m/285-2851164_npxbl-javier-escuella-hd-png-download.png'}>
        Javier Escuella is a recurring character in the Red Dead series, appearing as a central character and a major antagonist in Red Dead Redemption, and as a major character in Red Dead Redemption 2.
      </Character>
      <Character name={'Sean Macguire'}
                 image={'https://www.pngfind.com/pngs/m/392-3927620_read-dead-rdr-2-red-dead-redemption-ii.png'}>
        Sean MacGuire is a recurring character in the Red Dead series, appearing as a supporting character in Red Dead Redemption 2 and as a stranger in Red Dead Online.
      </Character>
      <Character name={'Karen Jones'}
                 image={'https://www.pngfind.com/pngs/m/306-3068880_npxbl-red-dead-redemption-2-karen-hd-png.png'}>
        Karen Jones is a supporting character featured in Red Dead Redemption 2.
      </Character>
    </>
  );
}

export default App;
