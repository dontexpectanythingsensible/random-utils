import React from 'react';

export default class Ad extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render () {
    return (
      <div className='ad'>
        <ins className='adsbygoogle'
          style={ { display: 'block' } }
          data-ad-client='ca-pub-3476090171072918'
          data-ad-slot='4523218787'
          data-ad-format='auto' />
      </div>
    );
  }
}
