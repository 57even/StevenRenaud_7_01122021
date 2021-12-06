import React from 'react';
import Card from './Card';

function CardList() {
  return(
    <main className="flex flex-col justify-center items-center py-12 p-3">
      <section className="w-full m-5 flex flex-col items-center justify-center gap-2">
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  )
}

export default CardList;
