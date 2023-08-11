import './index.css'
import {BiSearch} from 'react-icons/bi'

const FiltersGroup = props => {
  const {categoryList, ratingList, changeSearch, titleSearch} = props
  const changeCategoryStatus = cate => {
    const {changeCategory} = props
    // console.log(cate)
    changeCategory(cate)
  }

  const changeRatingId = id => {
    const {changeRating} = props
    changeRating(id)
  }

  const changeSearchInputText = event => {
    //  const {changeSearch} = props
    if (event.key === 'Enter') {
      // console.log('Enter key evet Triggered')
      changeSearch(titleSearch)
    }
  }

  const clearFilter = () => {
    const {clearAllFilterState} = props
    clearAllFilterState()
  }

  const changeSearchValue = event => {
    changeSearch(event.target.value)
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          value={titleSearch}
          onChange={changeSearchValue}
          onKeyDown={changeSearchInputText}
        />
        <BiSearch />
      </div>
      {/* Replace this element with your code */}
      <h1>Category</h1>
      <ul className="category-list-container">
        {categoryList.map(eachCategory => (
          <li key={eachCategory.categoryId}>
            <p
              className="category-item"
              onClick={() => changeCategoryStatus(eachCategory.categoryId)}
            >
              {eachCategory.name}
            </p>
          </li>
        ))}
      </ul>
      <ul className="rating-list-container">
        {ratingList.map(each => (
          <li key={each.ratingId}>
            <img
              src={each.imageUrl}
              alt={`rating ${each.ratingId}`}
              onClick={() => changeRatingId(each.ratingId)}
            />
            <span>&up</span>
          </li>
        ))}
      </ul>
      <button type="button" onClick={clearFilter}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
