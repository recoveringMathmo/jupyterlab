// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  JupyterLabPlugin
} from '../application';

import {
  DocumentRegistry, IDocumentRegistry, TextModelFactory, Base64ModelFactory
} from './index';


/**
 * The default document registry provider.
 */
export
const docRegistryProvider: JupyterLabPlugin<IDocumentRegistry> = {
  id: 'jupyter.services.document-registry',
  provides: IDocumentRegistry,
  activate: (): IDocumentRegistry => {
    let registry = new DocumentRegistry();
    registry.addModelFactory(new TextModelFactory());
    registry.addModelFactory(new Base64ModelFactory());
    return registry;
  }
};
