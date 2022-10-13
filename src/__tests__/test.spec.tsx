import '@testing-library/jest-dom'
import '@testing-library/react'

import ButtonComponent from '../components/button'
import History from '../components/history/history'
import NotificationNewRepository from '../components/notification-new-repository/notification-new-repository'
import SideMenu from '../components/side-menu/side-menu'
import Tools from '../components/tools/tools'             /* Realizando imports dos escopos de cada componente */
import { render } from '@testing-library/react'

test('testButton', () => {      //Realizando teste por Match de conteúdo da tag de texto do componente "button"
  const { getByText } = render(<ButtonComponent />)   

  expect(getByText('test')).toBeTruthy()      
})

test('testHistory', () => {    //Realizando teste por Match de conteúdo da tag de texto do componente "History"
  const { getByText } = render(<History />)

    expect(getByText('The home for all developers - including you.')).toBeTruthy()
    expect(getByText('Welcome to your personal dashboard, where you can find an introduction to how GitHub works, tools to help you build software, and help merging your first lines of code')).toBeTruthy()
    expect(getByText('Start writing code')).toBeTruthy()
    expect(getByText('Start a new repository')).toBeTruthy()
    expect(getByText('Collaborate on code with others and track your work in a repository')).toBeTruthy()
    expect(getByText('Create a new Repository')).toBeTruthy()
    expect(getByText('Collaborate on code with others and track your work in a repository')).toBeTruthy()
    expect(getByText('Create a new Repository')).toBeTruthy()
    expect(getByText('Create your profile README')).toBeTruthy()
    expect(getByText('Create a file in a repository that tells the GibHub community who you are.')).toBeTruthy()
    expect(getByText('Create a README')).toBeTruthy()
    expect(getByText('Start a new repository')).toBeTruthy()
    expect(getByText('Collaborate on code with others and track your work in a repository')).toBeTruthy()
    expect(getByText('Collaborate on code with others and track your work in a repository')).toBeTruthy()

})

test('testNotificationNewRepository', () => {   //Realizando teste por Match de conteúdo da tag de texto do componente "NotificationNewRepository"
  const { getByText } = render(<NotificationNewRepository />)

    expect(getByText('Anderson Andrade')).toBeTruthy()
    expect(getByText('created a repository')).toBeTruthy()
    expect(getByText('AndersonAndrad/ReactTest')).toBeTruthy()
    expect(getByText('3 hours ago')).toBeTruthy()
    expect(getByText('AndersonAndrade/ReactTest')).toBeTruthy()
    expect(getByText('Updated Oct 2')).toBeTruthy()
    expect(getByText('Star')).toBeTruthy() 

})

test('testSide-menu', () => {       //Realizando teste por Match de conteúdo da tag de texto do componente "SideMenu"
  const { getByText } = render(<SideMenu />)

    expect(getByText('AndersonAndrad')).toBeTruthy()
    expect(getByText('Recent repositories')).toBeTruthy()
    expect(getByText('AndersonAndrad/study-nodejs')).toBeTruthy()
    expect(getByText('AndersonAndrad/study-nodejs')).toBeTruthy()
    expect(getByText('AndersonAndrad/study-nodejs')).toBeTruthy()
    expect(getByText('AndersonAndrad/study-nodejs')).toBeTruthy()
    expect(getByText('AndersonAndrad/study-nodejs')).toBeTruthy()
    expect(getByText('Show more')).toBeTruthy()

})

test('testTools', () => {         //Realizando teste por Match de conteúdo da tag de texto do componente "Tools"
  const { getByText } = render(<Tools />)

    expect(getByText('Use tools of the trade')).toBeTruthy()
    expect(getByText('Write code in your web browser')).toBeTruthy()
    expect(getByText('Collaborate on code with others and track your work in a repository')).toBeTruthy()
    expect(getByText('Install a powerful code editor')).toBeTruthy()
    expect(getByText('Create a file in a repository that tells the GibHub community who you are.')).toBeTruthy()
    expect(getByText('Set up your local dev environment')).toBeTruthy()
    expect(getByText('Collaborate on code with others and track your work in a repository')).toBeTruthy()
    expect(getByText('Collaborate on code with others and track your work in a repository')).toBeTruthy()

})

//Teste feito por RIAN SOUSA FLORENTIO DAS CHAGAS
