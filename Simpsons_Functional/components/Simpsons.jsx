import React from "react";
const Simpsons = (props) => {
  const { simpsons, sortType, searchTerm } = props;

  let _simpsons = [...simpsons];

  //remove one not needed
  if (searchTerm) {
    _simpsons = _simpsons.filter((item) => {
      return item.character.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  //sort by user choice
  _simpsons = sort(_simpsons, sortType);

  return (
    <>
      <Controls />

      {_simpsons.length === 0 && <p>Sorry, no results!</p>}

      {_simpsons.map((item, index) => {
        return <Character item={item} key={item.id} />;
      })}
    </>
  );
};

function mapStateToProps(state) {
  return {
    sortType: state.sortType,
    simpsons: state.simpsons,
    searchTerm: state.searchTerm,
  };
}

export default Simpsons;
