import { Component } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";


const columns = [
    {
        name: 'Category',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Description',
        selector: row => row.description,
        sortable: true,
    },
    {
        name: 'Grade',
        selector: row => row.grade,
        sortable: true,
    },
    {
        name: 'Date',
        selector: row => row.date,
        sortable: true,
    },
];

class GradingPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            studentGrade:[],
            data: [],
            categories: []
        }
    }

    componentDidMount(){
        this.fetchStudentGrades()
        this.fetchCategories()
        
    }

    fetchStudentGrades(){
        fetch('http://localhost:8080/api/grading/student-grade-details?studentId=0')
        .then(response => response.json())
        .then(student => {
            student.map(element => {
                this.setState(prevState => ({
                    data:[...prevState.data, {
                        id: element.id,
                        title: 'Ghostbusters',
                        description: element.description,
                        grade: element.studentDetails.grade,
                        date: element.dateOfactivity,
                    }]
                }))
            });
      });
    }

    fetchCategories(){
        fetch('http://localhost:8080/api/grading/categories')
            .then(response => response.json())
            .then(data => {
                this.setState({categories: data});
                console.log(this.state.categories)
            })
    }
    componentWillUnmount(){

    }
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Category</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Category</option>
                                            {this.state.categories.map(category => {
                                                <option value="1">{category.name}</option>
                                            })}
                                            
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="text" id="inputScore" aria-describedby="" required/>
                                        <Form.Text >Description of the grade (e.g. quiz, activity, or exam)</Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Date of activity</Form.Label>
                                        <Form.Control type="date" name='date_of_birth' />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Number of Items</Form.Label>
                                            <Form.Control type="text" id="inputScore" aria-describedby="" required/>
                                            <Form.Text >The score must not be grater than number of items.</Form.Text>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group>
                                            <Form.Label>Score</Form.Label>
                                            <Form.Control type="text" id="inputScore" aria-describedby="" required/>
                                            <Form.Text >The score must not be grater than number of items.</Form.Text>
                                    </Form.Group>
                                    </Col>
                                    <Col>
                                    </Col>
                                </Row>
                            </Form>
                            
                            <Row>
                                <Col >
                                    <Button varian="primary">Add</Button>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <DataTable
                                        columns={columns}
                                        data={this.state.data}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col className="text-right">
                                    <Button variant="success" >Submit</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default GradingPage;