let a = 'true';
switch (typeof(a)) {
  case 'string':
    console.log(a + ' - строка');
    break;
  case 'boolean':
    console.log(a + ' - логический тип');
    break;
  case 'number':
    console.log(a + ' - число');
    break;
  default:
    console.log('Тип а не определен');
}
