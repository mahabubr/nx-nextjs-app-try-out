import { Button } from '@nx-nextjs-try-out/interface';
import dynamic from 'next/dynamic';
const CustomerComponent = dynamic(() => import('customer/CustomerList'));

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="grid place-items-center w-full h-screen text-center">
      <div>
        <p>Message</p>
        <Button text="Welcome from Message" />
        <CustomerComponent />
      </div>
    </div>
  );
}
