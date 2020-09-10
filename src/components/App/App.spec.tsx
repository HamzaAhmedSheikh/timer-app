import React from 'react';
import { shallow } from 'enzyme';
import App from './App';




describe('App Component renders', () => {     
    
    let container: any = shallow(<App />);  


    it('should render a div', () => {        
        expect(container.find('div').length).toBeGreaterThanOrEqual(1);
    });   

    // 2nd test

    it("should render a p", () => {
        expect(container.find('p').length).toEqual(1);
    }); 
   

});    


