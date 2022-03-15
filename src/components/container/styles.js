import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line import/prefer-default-export
export const useStyles = makeStyles(() => ({
  root: (container) => ({
    maxWidth: '100%',
    flexGrow: 1,
    backgroundColor: container?.backgroundColor || 'transparent',
    backgroundImage: container?.backgroundImage ? `url(${container.backgroundImage.file.url})` : null,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    zIndex: 2,
    '&::before': {
      content: '""',
      backgroundColor: container?.backgroundImageOverlayColor || 'transparent',
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      opacity: container?.backgroundImageOverlayOpacity
        ? container.backgroundImageOverlayOpacity / 100 : 1
    }
  })
}));
