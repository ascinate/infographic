// app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './globals.css'; // Optional: your own global CSS
import { Zalando_Sans_Expanded , DM_Sans } from "next/font/google";
import ImportBsJS from "../app/components/ImportBsJS";




const zalandosansexpanded = Zalando_Sans_Expanded({
  variable: "--font-zalandosansexpanded-sans",
  weight: [ '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const dmsans = DM_Sans({
  variable: "--font-dmsans-sans",
  weight: [ '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});


export const metadata = {
  title: 'Bootstrap 5 in Next.js 15',
  description: 'Demo using Bootstrap 5 in App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <style>{`
          body{
            font-family: ${dmsans.style.fontFamily} !important; 
          }
          h1{
            font-family: ${zalandosansexpanded.style.fontFamily} !important; 
          }
          h2{
            font-family: ${zalandosansexpanded.style.fontFamily} !important; 
          }
          h5.sub-headings{
            font-family: ${zalandosansexpanded.style.fontFamily} !important; 
          }
          .featured-Illus p{
            font-family: ${zalandosansexpanded.style.fontFamily} !important;
          }
          .categs-ites{
            font-family: ${zalandosansexpanded.style.fontFamily} !important;
          }
          .btn{
            font-family: ${dmsans.style.fontFamily} !important; 
          }
          p{
            font-family: ${dmsans.style.fontFamily} !important; 
          }
          
         `}
        </style>
        <ImportBsJS/>
        {children}
      
        
      </body>
    </html>
  );
}
