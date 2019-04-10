import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                  id: 0,
                  name:'Summary',
                  image: 'assets/images/fa-image.png',
                  category: 'Summary',
                  description:'Summary of my professional experience goes here.'                        
                },
                {
                  id: 1,
                  name:'Technical Skills',
                  image: 'assets/images/fa-image.png',
                  category: 'Technical Skills',
                  description: 'Glimpse of my technical skills go here.'
                },
                {
                  id: 2,
                  name:'Experience',
                  image: 'assets/images/fa-image.png',
                  category: 'Experience',
                  description:'My work experience goes here.'
                },
                {
                  id: 3,
                  name:'Academic Projects',
                  image: 'assets/images/fa-image.png',
                  category: 'Academic Projects',
                  description:'The projects I did while I was pursuing my masters go here.'                        
                }
              ],
        };
    }

    render() {
        const menu = this.state.categories.map((category) => {
            return (
              <div key={category.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                      <Media object src={category.image} alt={category.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{category.name}</Media>
                    <p>{category.description}</p>
                  </Media>
                </Media>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              <Media list>
                  {menu}
              </Media>
            </div>
          </div>
        );
    }
}

export default Category;