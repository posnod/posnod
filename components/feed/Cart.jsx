const Cart = ({ item }) => {
  return (
    <div
      className='min-w-[280px] sm:min-w-[320px] h-[50vh] border bg-[#DDDDDD] rounded-2xl p-6 flex flex-col justify-between shadow-sm'
    >
      <div>
        <div className='flex items-center gap-3'>
          <div className={`w-6 h-6 rounded-full ${item.color}`} />
          <p className='text-sm font-medium text-gray-700'>{item.title}</p>
        </div>
        <p className='mt-4 text-lg leading-snug text-gray-800'>{item.text}</p>
      </div>

      <div className='mt-6 flex items-center justify-between'>
        <span className='text-sm text-gray-600'>{item.tag}</span>
        <button className='w-8 h-8 rounded-full bg-white shadow flex items-center justify-center'>
          →
        </button>
      </div>
    </div>
  );
};

export default Cart;
