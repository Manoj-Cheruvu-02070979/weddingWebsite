import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './MenuTabular.css';
import EventDetails from './EventDetails';

export default class MenuTabular extends Component {
  state = { activeItem: 'Event Details' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderContent() {
    const { activeItem } = this.state;

    switch (activeItem) {
      case 'Event Details':
        return <EventDetails />;
      case 'Subhalekha':
        return (
          <div className="content">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
              <Viewer fileUrl="./Assets/weddingCard.pdf" />
            </Worker>
            <Button
              className="download-button"
              onClick={() => this.downloadPdf('./Assets/weddingCard.pdf')}
            >
              Download Subhalekha
            </Button>
          </div>
        );
      default:
        return null;
    }
  }

  downloadPdf = (fileUrl) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'downloaded.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary size='massive'>
          <Menu.Item
            name='Event Details'
            active={activeItem === 'Event Details'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Subhalekha'
            active={activeItem === 'Subhalekha'}
            onClick={this.handleItemClick}
          />
        </Menu>
        {this.renderContent()}
      </div>
    );
  }
}
