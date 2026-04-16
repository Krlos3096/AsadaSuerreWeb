import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Box,
  SxProps,
  Theme,
  Zoom,
  useMediaQuery,
  useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';

export interface FullScreenDialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
  image?: string;
}

const FullScreenDialog: React.FC<FullScreenDialogProps> = ({
  open,
  onClose,
  title,
  children,
  actions,
  maxWidth = 'lg',
  fullWidth = true,
  sx,
  image
}) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const Transition = React.forwardRef<
    unknown,
    TransitionProps & { children: React.ReactElement }
  >(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      fullScreen={isXs}
      slots={{ transition: Transition }}
      sx={sx}
    >
      {image && (
        <Box
          component="img"
          src={image}
          alt={title || 'Dialog header'}
          sx={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      )}
      {title && (
        <DialogTitle
          sx={{
            m: image ? '-40px 16px 16px' : 2,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#04A6DB',
            color: 'primary.contrastText',
            border: "1px solid black",
            borderRadius: 2,
            position: 'relative',
            zIndex: 1
          }}
        >
          <Box sx={{ fontSize: '1.25rem', fontWeight: 600 }}>
            {title}
          </Box>
          <IconButton
            edge="end"
            onClick={onClose}
            aria-label="close"
            sx={{ color: 'primary.contrastText' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
      )}
      {!title && (
        <IconButton
          edge="end"
          onClick={onClose}
          aria-label="close"
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
            zIndex: 1
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
      <DialogContent
        sx={{
          p: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {children}
      </DialogContent>
      {actions && (
        <DialogActions
          sx={{
            p: 2,
            borderTop: 1,
            borderColor: 'divider'
          }}
        >
          {actions}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default FullScreenDialog;
