import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newArticle = {
      title: title,
      body: body,
      date: new Date().toLocaleDateString()
    };
    setArticles([...articles, newArticle]);
    setTitle('');
    setBody('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Reactのブログ</h1>
      </header>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label className='h1 mt-3 '>題名</Form.Label>
                <Form.Control className='mt-3 ' type="text" placeholder="タイトルの登録" value={title} onChange={(event) => setTitle(event.target.value)} />
              </Form.Group>
              <Form.Group>
                <Form.Label className='h1 mt-3'>内容</Form.Label>
                <Form.Control className='mt-3' as="textarea" rows={3} placeholder="内容の登録" value={body} onChange={(event) => setBody(event.target.value)} />
              </Form.Group>
              <Button variant="success" type="submit">
                送信
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className='article'>記事一覧</h2>
            {articles.map((article, index) => (
              <div key={index}>
                <h1 className='border-bottom'>{article.title}</h1>
                <h2 className='border-bottom'>{article.body}</h2>
                <h3 className='border-bottom'>{article.date}</h3>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
