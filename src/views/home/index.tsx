import React, { memo } from 'react';

// interface HomeProps {
//   name: string;
//   age: number;
// }
// const Home: FC<HomeProps> = memo((prop) => {
//   console.log(prop.name, prop.age);
//   return (
//     <div>
//       <span>Home</span>
//     </div>
//   );
// });
const Home = memo(() => {
  return (
    <div>
      <span>Home</span>
    </div>
  );
});
Home.displayName = 'Home';
export default Home;
