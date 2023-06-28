import { XIcon } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  onToggleView: () => void;
}

const cartStyle = {
  show: 'translate-x-0 shadow-[-5px_0px_10px_1px_#00000024]',
  hide: 'translate-x-64 shadow-none',
};

export const Cart = (props: CartProps) => {
  return (
    <aside
      id="cart"
      className={`absolute right-0 min-h-screen w-64 flex-col bg-white p-2 transition-all duration-500 ${
        props.isOpen ? cartStyle.show : cartStyle.hide
      }`}
    >
      <div className="text-slate-500">
        <XIcon className="cursor-pointer" onClick={props.onToggleView} />
      </div>
      <div className="relative box-border w-full">
        <h2>Cart</h2>
      </div>
    </aside>
  );
};
