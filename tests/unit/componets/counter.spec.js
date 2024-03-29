import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('counter componer', () =>{
        /*
        test('debe de hacer match conn el snapshot', ()=>{

                const wrapper = shallowMount( Counter )

                expect(wrapper.html() ).toMatchSnapshot()

        })
    */


 test('h2 debe de tener el valor por defecto "counter"', () => {
       
 const wrapper = shallowMount( Counter )       
 
 expect(wrapper.find('h2').exists()).toBeTruthy()
 const h2value= wrapper.find('h2').text()
 
 expect(h2value ).toBe('Counter')

 })



 test('El valor por defecto debe ser 100 en el p', () => {
     //wrapper
     const wrapper = shallowMount( Counter ) 

     //ptags
     const value = wrapper.find('[data-testid="counter"]')

     // expect segundo p === 100
    //  expect ( ptags [1].text()). toBe('100')   
     expect ( value). toBe('100')   

 })

})