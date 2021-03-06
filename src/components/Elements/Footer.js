import { AccountTree, ViewModule } from '@material-ui/icons';
import { IconButton, Toolbar } from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';
import React from 'react';
import style from './Elements.module.css';

export const Footer = ({
  viewSwitchHandler,
  currentView,
  totalPages,
  currentPage,
  setPageHandler,
}) => {

  return (
    <div className={style.footer}>
      <Toolbar className={style.toolbar}>
        <div>
          <IconButton
            edge='end'
            onClick={() => viewSwitchHandler('cards')}
            disabled={currentView === 'cards' ? true : false}>
            <ViewModule color={currentView === 'cards' ? 'action' : 'disabled'} />
          </IconButton>
          <IconButton
            edge='end'
            onClick={() => viewSwitchHandler('tree')}
            disabled={currentView === 'tree' ? true : false}>
            <AccountTree color={currentView === 'tree' ? 'action' : 'disabled'} />
          </IconButton>
        </div>
        <div>
          <Pagination
            color='secondary'
            count={totalPages}
            page={currentPage}
            onChange={(e, page) => setPageHandler(page)}
          />
        </div>
      </Toolbar>
    </div>
  );
};
