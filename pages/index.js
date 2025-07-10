// @ts-check
import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';

export default function Home() { 
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <h2 className="text-xl text-[#0F4C81] mb-4">Welcome to Project Sena!</h2>
        <PrimaryButton onClick={() => console.log('Clicked!')}>
          සුභ උදෑසනක්! (Good Morning!)
        </PrimaryButton>
      </main>
    </div>
  );
}
