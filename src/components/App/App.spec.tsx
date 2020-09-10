import React from 'react';
import { shallow } from 'enzyme';
import App from './App';



describe('App Component renders', () => {     
    
    let container = shallow(<App />);  


    it('should render a div', () => {        
        expect(container.find('div').length).toBeGreaterThanOrEqual(1);
    });

    // 2nd test

    // it('should render the Timer Component', () => {
    //     expect(container.containsMatchingElement(<Timer />)).toEqual(true);
    // });

    // 3rd test

    it("should click button", () => {
        expect(container.find('p').length).toEqual(1);
    });  

});


