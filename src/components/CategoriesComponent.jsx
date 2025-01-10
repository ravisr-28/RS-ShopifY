import React from 'react'
import CategoriesCard from './CardComponent.jsx/CategoriesCard'

const CategoriesComponent = () => {
  return (
    <div className="md:grid grid-cols-3 md:px-12 px-4 space-y-4 md:space-y-0 gap-8 bg-neutral-900 py-6">
      <CategoriesCard
        image={
          "https://www.spized.com/media/a1/b1/2a/1701099577/fussball-trikot-herren-kurzarm-basic1-1.jpg"
        }
        types={"Mens"}
        button={"View all"}
      />
      <CategoriesCard
        image={
          "https://www.spized.com/thumbnail/8b/33/g0/1701081936/fussball-torwarttrikot-damen-langarm-basic1-1_600x600.jpg"
        }
        types={"Womens"}
        button={"View all"}
      />
      <CategoriesCard
        image={
          "https://www.spized.com/thumbnail/78/41/2c/1698000657/fussball-trikot-kinder-langarm-basic6-2_600x600.jpg"
        }
        types={"Kids"}
        button={"View all"}
      />
    </div>
  );
}

export default CategoriesComponent
