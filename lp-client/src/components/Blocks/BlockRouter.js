import React from 'react';
import BodyStreamFieldBlock from './BodyStreamField/BodyStreamFieldBlock';
import * as Elements from './Elements/Elements';
import hashContents from '../../util/hashContents';
import NoBlockError from '../UI/Errors/NoBlockError';

class BlockRouter {
  constructor(type) {
    this.type = type;
  }

  getComponent = (blockContent, props) => {
    const key = hashContents(blockContent)
    let type = this.type;
    // TODO - probably find a better way to determine streamfields...
    if (this.type === 'body' && Array.isArray(blockContent)) type = 'streamfield'
    let Component;
    switch (type) {
      case 'streamfield': Component = BodyStreamFieldBlock; break;
      case 'title': Component = Elements.Title; break;
      case 'heading': Component = Elements.Heading; break;
      case 'paragraph': Component = Elements.Paragrah; break;
      case 'published_date': Component = Elements.PublishedDate; break;
      default: return <NoBlockError type={type} key={key}/>
    }

    return <Component value={blockContent} {...props} key={key} />
  }
};

export default BlockRouter;
