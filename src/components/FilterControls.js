import React from 'react'
import { FormGroup, FormControl, ButtonGroup, Button, ButtonToolbar } from 'react-bootstrap'

const filterGroups = [
  [
    {
      name: 'city_gdansk',
      label: 'Gdańsk'
    },
    {
      name: 'city_sopot',
      label: 'Sopot'
    },
    {
      name: 'city_gdynia',
      label: 'Gdynia'
    }
  ],
  [
    {
      name: 'gender_male',
      label: 'Male'
    },
    {
      name: 'gender_female',
      label: 'Female'
    }
  ]
]


class FilterControls extends React.Component {
  render() {
    const {
      handleFilterUpdate,
      handleSearchPhraseUpdate,
      searchPhrase,
      activeFilterNames
    } = this.props
    // const handleFilterUpdate = this.props.handleFilterUpdate
    return (
      <form>
        <FormGroup>
          <FormControl
            type="text"
            value={searchPhrase}
            placeholder="Enter text"
            onChange={handleSearchPhraseUpdate}
          />
        </FormGroup>

        <div style={{ padding: '10px 0' }}>
          {/*<ButtonToolbar>*/}
            {/*{*/}
              {/*filterGroups.map(*/}
                {/*(group, index) => (*/}
                  {/*<ButtonGroup key={index}>*/}
                    {/*{*/}
                      {/*group.map(*/}
                        {/*filter => {*/}
                          {/*const isActive = activeFilterNames.includes(filter.name)*/}
                          {/*return (*/}
                            {/*<Button*/}
                              {/*key={filter.name}*/}
                              {/*active={isActive}*/}
                              {/*onClick={() => handleFilterUpdate(filter.name, !isActive)}*/}
                            {/*>*/}
                              {/*{filter.label}*/}
                            {/*</Button>*/}
                          {/*)*/}
                        {/*}*/}
                      {/*)*/}
                    {/*}*/}
                  {/*</ButtonGroup>*/}
                {/*)*/}
              {/*)*/}
            {/*}*/}
          {/*</ButtonToolbar>*/}
        </div>
      </form>
    )
  }
}

export default FilterControls