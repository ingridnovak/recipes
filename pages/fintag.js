export async function getServerSideProps({ res }) {
  try {
    // Тут можеш прибрати або динамічно підвантажувати дані
    const data = {
      'ican:xcb': 'ab644ae44561a5a4c4d3011ee104ac8f0f848d84d4dd',
      'defi:fee': '1.00%',
    };

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.write(JSON.stringify(data));
    res.end();
  } catch (error) {
    // У випадку помилки — повертай пустий об'єкт і все одно встановлюй заголовки
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.write(JSON.stringify({})); // або null
    res.end();
  }

  return { props: {} }; // обов'язково, навіть якщо порожнє
}

export default function Fintag() {
  return null; // сторінка нічого не рендерить
}
