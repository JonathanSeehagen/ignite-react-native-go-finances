import React from 'react';
import { render } from '@testing-library/react-native';

import { Profile } from '../../screens/Profile';
import { Text } from 'react-native';

//Categoria dos teste
describe('Group of tests: Profile Screen', () => {
  //Nome do teste, função que ela deve testar
  //test('check if show correctly user input name placeholder', () => {
  it('should have placeholder correctly in user name', () => {
    const { /*debug,*/ getByPlaceholderText } = render(<Profile />)

    const inputName = getByPlaceholderText('Nome');
    //console.log(inputName.props.placeholder);

    //O que eu espero? Estou acessando o placeholder
    //e eu quero saber se ele foi encontrado, se ele é verdadeiro
    //expect(inputName.props.placeholder).toBeTruthy();
    expect(inputName).toBeTruthy();
  });

  it('should be load user data', () => {
    const { getByTestId } = render(<Profile />);

    const inputName = getByTestId('input-name');
    const inputSurname = getByTestId('input-surname');

    expect(inputName.props.value).toEqual('Jonathan');
    expect(inputSurname.props.value).toEqual('Seehagen');
  })

  it('should exist title correctly', () => {
    const { getByTestId } = render(<Profile />);

    const textTitle = getByTestId('text-title');

    expect(textTitle.props.children).toContain('Perfil');
  })
})

