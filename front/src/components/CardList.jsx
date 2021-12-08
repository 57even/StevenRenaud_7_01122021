import React from 'react';
import Card from './Card';

export default function CardList() {
  return(
    <main className="flex flex-col justify-center items-center py-8 p-3">
      <section className="w-full m-5 flex flex-col items-center justify-center gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  )
}
