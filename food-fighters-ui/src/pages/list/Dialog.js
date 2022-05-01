import './Dialog.css'

import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';

export default function SimpleDialog(props) {
  const { onClose, selectedRecipe, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <div className='dialogBox'>
      <Dialog onClose={handleClose} open={open}>
        <div className='recipe_name'>
          <Typography gutterBottom variant="h3" component="div">
            <b>{selectedRecipe[0]}</b>
          </Typography>
        </div>
        <div className='prep_time'>
          <Typography variant="h5" color="text.secondary">
            <b>Prep Time:</b> {selectedRecipe[2]} minutes
          </Typography>
        </div>
        <div className='ingredients'>
          <Typography variant="h5" color="text.secondary">
            <b>Ingredients:</b>
            <ul>
              {selectedRecipe[1].map((ingredient, i) => {
                return (
                  <li>
                    {ingredient}
                  </li>
                );
              })}
            </ul>
          </Typography>
        </div>
    </Dialog>
  </div>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedRecipe: PropTypes.array.isRequired,
};
