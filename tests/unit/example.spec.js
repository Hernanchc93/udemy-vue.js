describe( 'Example Component', () => {
  test( 'Debe de ser mayor a 10', () => {
    // Arreglar
    let value = 12;
    // Estimulo
    value = value + 2
    // Observer el resultado
    expect( value ).toBeGreaterThan( 10 )
  } )
} )