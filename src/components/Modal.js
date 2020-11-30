import React from 'react';
import PropTypes from "prop-types";
import "./styles.css"
export default class Modal extends React.Component {
  
  onClose = e => {
    this.props.onClose(e);
  };
  render() {
    if(!this.props.show){
      return null;
  }

  const {id,author,download_url, url} = this.props.imageDetails;

  return (
    <div onClick={this.onClose}  className="modal-wrapper">
        <div className="modal-content">
          <img src={download_url} height={500}width={500}></img>
          <div class="bottomcenter">{author}</div>
          <a href={url} target="_blank" class="bottomcenter">Click To Enter</a>
        </div>
        </div>
  );

  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};