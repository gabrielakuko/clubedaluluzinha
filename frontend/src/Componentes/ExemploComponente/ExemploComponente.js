import React, { Component } from 'react';
import Slider from '../Slide/Slide';

// Importando Data
import Eventos from '../../Data/Eventos.json'

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between' }} />
        <Slider
          options={{
            autoPlay: 4000,
            pauseAutoPlayOnHover: true,
            wrapAround: false,
            fullscreen: false,
            adaptiveHeight: true,
          }}
        >
          {Eventos.map((evento, index) => (
            <div key={index} style={{ width: '80%', height: '400px', margin: '0 0.5em' }}>
              <h1>{evento.nomeEvento}</h1>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}