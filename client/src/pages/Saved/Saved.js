import React, { Component } from "react";
import API from "../../utils/API";
import { Article } from '../../components/Article'
import Jumbotron from "../../components/Jumbotron";
import { Container, Row, Col } from "../../components/Grid";
import { Panel, PanelHeading, PanelBody } from '../../components/Panel'


export default class SavedArticles extends Component {
  state = {
    savedArticles: []//stores saved articles in state for rendering
  };
  

  //initial loading of saved articles
  componentDidUpdate() {
    this.loadArticles();
  };

  componentWillMount() {
    this.loadArticles();
  }

  //function that queries the API server and retrieves saved articles
  loadArticles = () => {
    API
      .getArticles()
      .then(results => {
        this.setState({savedArticles: results.data})
      })
  };

  //function that queries API server and deletes articles
  deleteArticle = id => {
    API
      .deleteArticle(id)
      .then(results => {
        //once deleted, they are removed from the state and articles are rendered
        let savedArticles = this.state.savedArticles.filter(article => article._id !== id)
        this.setState({savedArticles: savedArticles})
        this.loadArticles();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-10" offset='sm-1'>
          <div className="bg-light">
            <Panel>
              <PanelHeading>
                <h3>Saved Articles</h3>
              </PanelHeading>
              <PanelBody>
                { this.state.savedArticles.length > 0 ?
                  (this.state.savedArticles.map((article, i) => (
                    <Article
                      key={i}
                      title={article.title}
                      url={article.url}
                      summary={article.summary}
                      date={article.date}
                      type='Delete'
                      onClick={() => this.deleteArticle(article._id)}
                    />
                    )
                  )) : <h1>You have no saved articles.</h1>
                }
              </PanelBody>
            </Panel>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };
};