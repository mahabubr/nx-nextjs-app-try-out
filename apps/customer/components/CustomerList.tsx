const CustomerList = () => {
  return (
    <div>
      {['pikaccu', 'meow', 'cat', 'mouse'].map((c) => (
        <p key={c}>{c}</p>
      ))}
    </div>
  );
};

export default CustomerList;
