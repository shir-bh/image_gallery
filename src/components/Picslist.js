
import React from 'react';
import data from '../list.json';
import Modal from './Modal';
import './styles.css'; 
export default class Picslist extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        show: false,
        choosenImage:null
      };
    }
  showModal = () => {
    this.setState({
      show: !this.state.show
    });
  }
  
  render(){
    return (
      <div>
        <Modal onClose={this.showModal} show={this.state.show} imageDetails={this.state.choosenImage} >
        </Modal>
        <div>
        <div class="flex-container">
        {data.map((imageDetails) => 
          <div 
          className="small-container"
            key={imageDetails.id}
            onClick={e => {
              console.log(imageDetails);
              this.setState({
                show: !this.state.show,
                choosenImage: imageDetails,
              });
          }}>
            <img src={imageDetails.download_url} className="small-image"></img>
          </div>)}
        </div>
       </div>
      </div>
    )
  }
}