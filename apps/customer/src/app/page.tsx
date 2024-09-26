import { Button } from '@nx-nextjs-try-out/interface';
// eslint-disable-next-line @nx/enforce-module-boundaries
import CustomerList from 'apps/customer/components/CustomerList';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="grid place-items-center w-full h-screen text-center">
      <div>
        <p>Customer</p>
        <Button text="Welcome from customer" />
        <CustomerList />
      </div>
    </div>
  );
}
