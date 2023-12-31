import { useNavigate } from 'react-router-dom';

export const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    // Metni belirli bir uzunluğa kadar kırp
    return text.slice(0, maxLength) + '...';
  }
  return text;
};

const BookItem = ({ book }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className='cursor-pointer  shadow-lg hover:shadow-2xl select-none transform motion-safe:hover:-translate-y-2 motion-safe:hover:scale-80 transition ease-in-out duration-500 border border-gray-200 bg-white rounded-lg'>
        <div onClick={() => navigate(`/bookDetail/${book.id}`)}>
          <img
            className='p-10 rounded-md object-cover w-full  h-max[200px]'
            src={book?.volumeInfo?.imageLinks?.thumbnail}
            alt='@hasangkz'
          />
        </div>
        <div className='pb-5'>
          <h3 className='text-2xl font-semibold tracking-tight text-gray-900 text-center hover-underline-animation'>
            {truncateText(book?.volumeInfo?.title, 48)}
          </h3>
          <br />
          {book?.volumeInfo?.authors ? (
            <h6 className='text-l italic hover:not-italic tracking-tight text-gray-900 text-center'>
              {book?.volumeInfo?.authors[0]}
            </h6>
          ) : (
            <br />
          )}
          <br />
          {book?.saleInfo?.saleability == 'FOR_SALE' ? (
            <div className='flex items-center justify-around'>
              <span className='text-2xl text-green-800 '>
                {book?.saleInfo?.listPrice?.amount}₺
              </span>
            </div>
          ) : (
            <div className='flex items-center mt-2 justify-center'>
              <span className='text-xl  text-red-700 '>STOKTA YOK</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BookItem;
