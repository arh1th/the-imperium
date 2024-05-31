/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaidIcon from '@mui/icons-material/Paid';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import { useTheme } from '@emotion/react';
import SouthIcon from '@mui/icons-material/South';
import Box from '@mui/material/Box';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { ScrollTrigger } from 'gsap/all';
import { TextPlugin } from 'gsap/all';
import PublicIcon from '@mui/icons-material/Public';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ArticleIcon from '@mui/icons-material/Article';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import BalanceIcon from '@mui/icons-material/Balance';
import GavelIcon from '@mui/icons-material/Gavel';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import VillaIcon from '@mui/icons-material/Villa';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import CropFreeIcon from '@mui/icons-material/CropFree';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const IndexPage = () => {
  const theme = useTheme();
  const lenisRef = React.useRef();
  const frontRef = React.useRef();
  const govRef = React.useRef(null);
  const econRef = React.useRef(null);
  const mapRef = React.useRef(null);
  const videoRef = React.useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // #region lenis setup
  useLenis((lenis) => {
    const handleScroll = () => {
      let isVisibleLocal = false;
      if (govRef.current) {
        const rect = govRef.current.getBoundingClientRect();
        isVisibleLocal =
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight);
        if (isVisible !== isVisibleLocal) setIsVisible(isVisibleLocal);
      }
      if (!isVisibleLocal && econRef.current) {
        const rect = econRef.current.getBoundingClientRect();
        isVisibleLocal =
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight);
        if (isVisible !== isVisibleLocal) setIsVisible(isVisibleLocal);
      }
      if (!isVisibleLocal && mapRef.current) {
        const rect = mapRef.current.getBoundingClientRect();
        isVisibleLocal =
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight);
        if (isVisible !== isVisibleLocal) setIsVisible(isVisibleLocal);
      }
    };
    lenis.on('scroll', ScrollTrigger.update);
    lenis.on('scroll', handleScroll);
    return () => {
      lenis.off('scroll', ScrollTrigger.update);
      lenis.off('scroll', handleScroll);
    };
  }, []);
  React.useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);
  // #endregion lenis

  useGSAP(() => {
    const t = gsap.timeline();
    t.to(
      '.imperium-main',
      {
        opacity: 1,
        delay: 1.77,
        duration: 3,
      },
      'start'
    );
    gsap.fromTo(
      '.m-btn',
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.5,
        ease: 'power1.in',
        delay: 2.5,
      }
    );
    gsap.fromTo(
      '.scroll-txt',
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 20,
        opacity: 1,
        ease: 'power1.in',
        delay: 4,
      }
    );
    // #region Gov Animations
    const govSection = document.querySelector('#government-section');
    let govSlides = gsap.utils.toArray('.government-slide');
    const govTl = gsap
      .timeline({
        defaults: {
          ease: 'sine.out',
        },
        scrollTrigger: {
          trigger: govSection,
          start: 'top 0%',
          pin: true,
          scrub: 2,
          snap: 1 / (govSlides.length - 1),
          end: '+=' + govSection.offsetWidth,
        },
      })
      .fromTo(
        '.gov-sign',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          ease: 'power1.in',
          delay: 3,
        }
      )
      .to(govSlides, {
        xPercent: -100 * 1,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.gov-type',
        {
          opacity: 0,
          y: -200,
        },
        {
          opacity: 1,
          y: 0,
          ease: 'power1.out',
          duration: 10,
          delay: 3,
        }
      )
      .to('.gov-type', {
        text: {
          padSpace: true,
          value: 'The U.S is a Presidential Democracy.',
          speed: 0.1,
        },
        duration: 20,
        delay: 3,
      })
      .to(govSlides, {
        xPercent: -100 * 2,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.gov-sign2',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      )
      .to(govSlides, {
        xPercent: -100 * 3,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.gov-history',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
          stagger: 5,
        }
      )
      .fromTo(
        '.gov-difference',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
          stagger: 5,
        }
      )
      .fromTo(
        '.gov-dif-earth',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
          stagger: 5,
        }
      )
      .fromTo(
        '.area',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
          stagger: 5,
        }
      )
      .fromTo(
        '.gov-dif-earth',
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
          stagger: 5,
        }
      )
      .fromTo(
        '.gov-dif-space',
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
          stagger: 5,
        }
      )
      .to('.area', {
        text: {
          value: 'Area of The Imperium: about 20,487,720,500 * 10^25 km²',
          speed: 0.1,
        },
        duration: 100,
        delay: 3,
      })
      .to(govSlides, {
        xPercent: -100 * 4,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.gov-sign3',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      )
      .to(govSlides, {
        xPercent: -100 * 5,
        duration: 10,
        delay: 3,
      });
    const govConstitutionTitles = gsap.utils.toArray('.gov-const-title');
    const govConstitutionInfo = gsap.utils.toArray('.gov-const-info');
    govConstitutionTitles.forEach((govTitle, index) => {
      const govInfo = govConstitutionInfo[index];
      govTl.fromTo(
        govTitle,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      govTl.fromTo(
        govInfo,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      govTl.fromTo(
        govTitle,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      govTl.fromTo(
        govInfo,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
    });

    govTl
      .to(govSlides, {
        xPercent: -100 * 6,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.gov-sign4',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      )
      .to(govSlides, {
        xPercent: -100 * 7,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.gov-bor',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      )
      .to(govSlides, {
        xPercent: -100 * 8,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.gov-sign5',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      )
      .to(govSlides, {
        xPercent: -100 * 9,
        duration: 10,
        delay: 3,
      });

    const govGroupTitles = gsap.utils.toArray('.gov-groups-title');
    const govGroupInfo = gsap.utils.toArray('.gov-groups-info');
    govGroupTitles.forEach((govTitle, index) => {
      const govInfo = govGroupInfo[index];
      govTl.fromTo(
        govTitle,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      govTl.fromTo(
        govInfo,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      govTl.fromTo(
        govTitle,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      govTl.fromTo(
        govInfo,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
    });

    govTl
      .to(govSlides, {
        xPercent: -100 * 10,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.gov-sign6',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      )
      .to(govSlides, {
        xPercent: -100 * 11,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.gov-voting-txt',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      )
      .to(govSlides, {
        xPercent: -100 * 12,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.gov-sign7',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      )
      .to(govSlides, {
        xPercent: -100 * 13,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.gov-org-txt',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      )
      .to(govSlides, {
        xPercent: -100 * 14,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.gov-sign8',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      )
      .to(govSlides, {
        xPercent: -100 * 15,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.imperi-flow',
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      )
      .to(govSlides, {
        xPercent: -100 * 16,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.us-flow',
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      )
      .to(govSlides, {
        xPercent: -100 * 17,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.gov-sign9',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      )
      .to(govSlides, {
        xPercent: -100 * 18,
        duration: 10,
        delay: 3,
      });
    const govLegalTitles = gsap.utils.toArray('.gov-legal-title');
    const govLegalInfo = gsap.utils.toArray('.gov-legal-info');
    govLegalTitles.forEach((govTitle, index) => {
      const govInfo = govLegalInfo[index];
      govTl.fromTo(
        govTitle,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      govTl.fromTo(
        govInfo,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      govTl.fromTo(
        govTitle,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      govTl.fromTo(
        govInfo,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
    });

    // #endregion
    // #region Econ Animations
    const econSection = document.querySelector('#econ-section');
    let econSlides = gsap.utils.toArray('.econ-slide');

    const econTl = gsap
      .timeline({
        defaults: {
          ease: 'sine.out',
        },
        scrollTrigger: {
          trigger: econSection,
          start: 'top 0%',
          pin: true,
          scrub: 2,
          snap: 1 / (econSlides.length - 1),
          end: '+=' + econSection.offsetWidth,
        },
      })
      .fromTo(
        '.econ-sign',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          ease: 'power1.in',
          delay: 3,
        }
      )
      .to(econSlides, {
        xPercent: -100 * 1,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.econ-type',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          ease: 'power1.out',
          duration: 10,
          delay: 3,
          stagger: 5,
        }
      )
      .to(econSlides, {
        xPercent: -100 * 2,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.econ-sign2',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          ease: 'power1.in',
          delay: 3,
        }
      )
      .to(econSlides, {
        xPercent: -100 * 3,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.econ-media',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          ease: 'sine.out',
          duration: 10,
          delay: 3,
          stagger: 5,
        }
      )
      .to(econSlides, {
        xPercent: -100 * 4,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.econ-sign3',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          ease: 'power1.in',
          delay: 3,
        }
      )
      .to(econSlides, {
        xPercent: -100 * 5,
        duration: 10,
        delay: 3,
      });
    const econHealthTitles = gsap.utils.toArray('.econ-health-title');
    const econHealthCaption = gsap.utils.toArray('.econ-health-caption');
    const econHealthInfo = gsap.utils.toArray('.econ-health-info');
    econHealthTitles.forEach((econTitle, index) => {
      const econCaption = econHealthCaption[index];
      const econInfo = econHealthInfo[index];
      econTl.fromTo(
        econTitle,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      econTl.fromTo(
        econCaption,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      econTl.fromTo(
        econInfo,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      econTl.fromTo(
        econTitle,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      econTl.fromTo(
        econCaption,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      econTl.fromTo(
        econInfo,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
    });

    econTl
      .to(econSlides, {
        xPercent: -100 * 6,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.econ-sign4',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          ease: 'power1.in',
          delay: 3,
        }
      )
      .to(econSlides, {
        xPercent: -100 * 7,
        duration: 10,
        delay: 3,
      });
    const econEduTitles = gsap.utils.toArray('.econ-edu-title');
    const econEduCaption = gsap.utils.toArray('.econ-edu-caption');
    const econEduInfo = gsap.utils.toArray('.econ-edu-info');
    const econEduMedia = gsap.utils.toArray('.econ-edu-media');
    const econEduMediaCaption = gsap.utils.toArray('.econ-edu-media-caption');
    econEduTitles.forEach((econTitle, index) => {
      const econCaption = econEduCaption[index];
      const econInfo = econEduInfo[index];
      const econMedia = econEduMedia[index];
      const econMediaCaption = econEduMediaCaption[index];
      econTl.fromTo(
        econTitle,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      econTl.fromTo(
        econCaption,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      econTl.fromTo(
        econInfo,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      econTl.fromTo(
        econMedia,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      econTl.fromTo(
        econMediaCaption,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      econTl.fromTo(
        econTitle,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      econTl.fromTo(
        econCaption,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      econTl.fromTo(
        econInfo,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      econTl.fromTo(
        econMedia,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
      econTl.fromTo(
        econMediaCaption,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          stagger: 5,
          duration: 10,
          delay: 3,
          ease: 'power1.in',
        }
      );
    });
    econTl
      .to(econSlides, {
        xPercent: -100 * 8,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.econ-sign5',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          ease: 'power1.in',
          delay: 3,
        }
      )
      .to(econSlides, {
        xPercent: -100 * 9,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.econ-env',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          ease: 'sine.out',
          duration: 10,
          delay: 3,
          stagger: 5,
        }
      );
    // #endregion
    // #region Map Animations
    const mapSection = document.querySelector('#map-section');
    let mapSlides = gsap.utils.toArray('.map-slide');
    const mapTl = gsap
      .timeline({
        defaults: {
          ease: 'sine.out',
        },
        scrollTrigger: {
          trigger: mapSection,
          start: 'top 0%',
          pin: true,
          scrub: 2,
          snap: 1 / (mapSlides.length - 1),
          end: '+=' + mapSection.offsetWidth,
        },
      })
      .fromTo(
        '.map-sign',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          ease: 'power1.in',
          delay: 3,
        }
      )
      .to(mapSlides, {
        xPercent: -100 * 1,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.imperi-map',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          ease: 'sine.out',
          duration: 10,
          delay: 3,
          stagger: 5,
        }
      )
      .to(mapSlides, {
        xPercent: -100 * 2,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.map-sign2',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          ease: 'power1.in',
          delay: 3,
        }
      )
      .to(mapSlides, {
        xPercent: -100 * 3,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.map-music',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          ease: 'power1.in',
          delay: 3,
        }
      )
      .to(mapSlides, {
        xPercent: -100 * 4,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.map-sign3',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          ease: 'power1.in',
          delay: 3,
        }
      )
      .to(mapSlides, {
        xPercent: -100 * 5,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.map-food',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          ease: 'power1.in',
          delay: 3,
        }
      )
      .to(mapSlides, {
        xPercent: -100 * 6,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.map-sign4',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          ease: 'power1.in',
          delay: 3,
        }
      )
      .to(mapSlides, {
        xPercent: -100 * 7,
        duration: 10,
        delay: 3,
      })
      .fromTo(
        '.map-symbols',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 5,
          duration: 10,
          ease: 'power1.in',
          delay: 3,
        }
      );
    // #endregion
  }, []);
  return (
    <ReactLenis
      ref={lenisRef}
      autoRaf={false}
      root
      options={{
        wheelMultiplier: isVisible ? 0.1 : 1,
      }}
    >
      <Box
        sx={{
          height: '100vh',
          backgroundColor: '#000000',
          width: '100vw',
        }}
        ref={frontRef}
      >
        <div
          style={{
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
        >
          <video
            style={{
              maxHeight: '720px',
              width: '100%',
              position: 'absolute',
              objectFit: 'cover',
              pointerEvents: 'none',
              zIndex: 1,
              marginRight: 'auto',
              marginLeft: 'auto',
              left: 0,
              right: 0,
            }}
            autoPlay
            muted
            playsInline
            className='imperium-video'
          >
            <source src={'/particles.mov'} type='video/mp4' />
          </video>
          <div
            style={{
              zIndex: 2,
              position: 'relative',
              textAlign: 'center',
              padding: '10',
            }}
          >
            <img
              src={`/${encodeURIComponent('the imperium main small.svg')}`}
              alt='The Imperium main png'
              className='imperium-main'
              style={{
                maxHeight: '720px',
                width: '100%',
                opacity: 0,
              }}
              loading='eager'
              type='image/svg+xml'
            />
          </div>
        </div>
        <Grid
          container
          spacing={2}
          sx={{
            m: '0 auto',
            width: '60%',
          }}
        >
          <Grid item xs={12} md={3}>
            <Button
              variant='contained'
              sx={{
                width: '100%',
                opacity: 0,
              }}
              className='m-btn'
              startIcon={<AccountBalanceIcon />}
              onClick={() => {
                govRef.current.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              The Government
            </Button>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button
              variant='contained'
              sx={{
                width: '100%',
                opacity: 0,
              }}
              className='m-btn'
              startIcon={<PaidIcon />}
              onClick={() => {
                econRef.current.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              The Economy
            </Button>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button
              variant='contained'
              sx={{
                width: '100%',
                opacity: 0,
              }}
              className='m-btn'
              startIcon={<AssistantDirectionIcon />}
              onClick={() => {
                mapRef.current.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              The Map and Culture
            </Button>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button
              variant='contained'
              sx={{
                width: '100%',
                opacity: 0,
              }}
              className='m-btn'
              startIcon={<PlayArrowIcon />}
              onClick={() => {
                videoRef.current.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              Propaganda Video
            </Button>
          </Grid>
        </Grid>

        <div
          style={{
            margin: '0 auto',
            width: '50%',
            textAlign: 'center',
          }}
          className='scroll-txt'
        >
          <Typography
            variant='h6'
            display='block'
            gutterBottom
            sx={{
              color: theme.palette.secondary.main,
            }}
          >
            Scroll Down (slowly!)
          </Typography>
          <SouthIcon className='mui-bounce' />
        </div>
      </Box>
      <Box
        sx={{
          display: 'flex',
        }}
        id='government-section'
        ref={govRef}
      >
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}
          className='government-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.secondary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h1'
              color={theme.palette.error.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='gov-sign'
            >
              <strong>1</strong>
            </Typography>
            <Typography
              variant='h3'
              color={theme.palette.primary.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='gov-sign'
            >
              THE GOVERNMENT
            </Typography>
            <Typography
              variant='h5'
              gutterBottom
              color={theme.palette.primary[200]}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='gov-sign'
            >
              of the Imperium
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
          }}
          className='government-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h5'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='gov-type'
            >
              The Imperium is a Elective Monarchy.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}
          className='government-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.secondary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h1'
              color={theme.palette.error.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='gov-sign2'
            >
              <strong>A1</strong>
            </Typography>
            <Typography
              variant='h3'
              color={theme.palette.primary.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='gov-sign2'
            >
              The Background
            </Typography>
            <Typography
              variant='h5'
              gutterBottom
              color={theme.palette.primary[200]}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='gov-sign2'
            >
              of the Imperium
            </Typography>
            <Typography
              variant='body1'
              gutterBottom
              color={theme.palette.primary[300]}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='gov-sign2'
            >
              (What even is The Imperium?)
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
          }}
          className='government-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              px: theme.spacing(2),
              pt: theme.spacing(0.1),
            }}
          >
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              gutterBottom
              className='gov-history'
            >
              The majority of the Human species in the Milky Way Galaxy are
              ruled by “The Imperium”, an interstellar empire that spans almost
              the entire galaxy.
            </Typography>
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              gutterBottom
              className='gov-history'
            >
              The Imperium spans at least 1,000,000 Human-populated planets
              scattered across the majority of the Milky Way.
            </Typography>
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              gutterBottom
              className='gov-history'
            >
              The Imperium is the largest and currently most powerful political
              entity in the galaxy, however, there are many other galactic
              countries in other galaxies.
            </Typography>
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              gutterBottom
              className='gov-history'
            >
              As a result, an Imperial planet may be hundreds or even thousands
              of light years away from its nearest neighbor.
            </Typography>
            <Typography
              variant='h6'
              sx={{
                mt: 5,
                textAlign: 'center',
                width: '100%',
              }}
              color='error'
              className='gov-difference'
            >
              What are the differences between <strong>The Imperium</strong> and
              the <strong>United States</strong>?
            </Typography>
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                width: '100%',
                color: theme.palette.success.main,
              }}
              className='gov-difference gov-difference-main'
            >
              The Imperium is an Elective Monarchy, which elects a Nomjr, while
              the United States is a Presidential Democracy.
            </Typography>
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                width: '100%',
                color: theme.palette.success.main,
              }}
              className='gov-difference gov-difference-main'
            >
              Both are heavily focused on combating dictatorships within the
              Country, with both containing a system of checks and balances.
            </Typography>
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                width: '100%',
                color: theme.palette.success.main,
              }}
              className='gov-difference gov-difference-main'
              gutterBottom
            >
              The main difference is the scale of the Imperium, spanning an
              entire galaxy, while the United States is a country within Planet
              Earth.
            </Typography>
            <div
              style={{
                width: 100,
                height: 100,
                position: 'relative',
                marginTop: 10,
              }}
            >
              <PublicIcon
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
                className='gov-dif-earth'
              />
              <AutoAwesomeIcon
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 2,
                }}
                className='gov-dif-space'
              />
            </div>
            <Typography
              variant='subtitle2'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='area'
            >
              Area of the US: 9,833,520 km²
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}
          className='government-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: '#000000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h1'
              color={theme.palette.error.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='gov-sign3'
            >
              <strong>B1/B2</strong>
            </Typography>
            <Typography
              variant='h3'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='gov-sign3'
            >
              Constitution Explanation/Year & Comparison w/ United States
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
          }}
          className='government-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              px: theme.spacing(2),
              pt: theme.spacing(0.1),
            }}
          >
            <div
              style={{
                width: '100%',
                position: 'relative',
                marginTop: -600,
              }}
            >
              {[
                'Preamble',
                'Article I',
                'Article II',
                'Article III',
                'Year',
                'Comparison w/ U.S.',
              ].map((v, i) => (
                <Typography
                  variant='h4'
                  key={i}
                  sx={{
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: i,
                  }}
                  className='gov-const-title'
                >
                  {v}
                </Typography>
              ))}
            </div>
            <div
              style={{
                width: '100%',
                position: 'relative',
                marginTop: 40,
              }}
            >
              {[
                `We, the citizens of The Imperium, on the auspicious day of January 1st, 3212, united in our quest for galactic prosperity and stability, recognizing our unique position as the largest and most powerful political entity across the Milky Way, do hereby ordain and establish this Constitution`,
                'Article I declares the Executive Branch of The Imperium. It starts by listing how long the Nomjr holds office, how they get elected, and what their Powers and Duties are. It goes on to list the role and duties of the Quasi-Nomjr. Finally, it lists the order of succession for the Nomjr.',
                'Article II declares the Chambers of the Imperium, or the legislative branch. It starts by listing the House of Representatives, which is the most populous chamber. It goes on to describe The Senate, which is the most powerful chamber. Finally, it lists the checks and balances of the Legislative Branch.',
                'Article III declares the Judicial Branch. It starts with the declaration of the Supreme Court and lists all levels under it. Then it lists the powers of the judicial branch.',
                '3212',
                "The Imperium's constitution is very similar to the U.S. constitution, however, due to many debates amongst the Planetary Council, the judicial branch's power has been increased to give more balance amongst the 3 branches. Judicial review has been given directly as one of it's powers.",
              ].map((v, i) => (
                <Typography
                  variant='h6'
                  key={i}
                  sx={{
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: i,
                  }}
                  className='gov-const-info'
                >
                  {v}
                </Typography>
              ))}
            </div>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}
          className='government-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.secondary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h1'
              color={theme.palette.error.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='gov-sign4'
            >
              <strong>C/C1/C2</strong>
            </Typography>
            <Typography
              color={theme.palette.primary.main}
              variant='h3'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='gov-sign4'
            >
              Bill of Rights/Freedoms
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
          }}
          className='government-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              px: theme.spacing(2),
              pt: theme.spacing(0.1),
            }}
          >
            <List dense>
              {[
                {
                  text: 'Right to free speech',
                  icon: <RecordVoiceOverIcon />,
                },
                {
                  text: 'Right to peaceful protest',
                  icon: <EmojiPeopleIcon />,
                },
                {
                  text: 'Right to petition the government',
                  icon: <ArticleIcon />,
                },
                {
                  text: 'Right to any religion',
                  icon: <TempleHinduIcon />,
                },
                {
                  text: 'Right to be born free and equal in rights',
                  icon: <BalanceIcon />,
                },
                {
                  text: 'All are equal below the law, even the Nomjr',
                  icon: <GavelIcon />,
                },
                {
                  text: 'Right to remain silent',
                  icon: <VolumeOffIcon />,
                },
                {
                  text: 'No one shall be subject to arrest without an infraction that must be informed to the individual',
                  icon: <QuestionMarkIcon />,
                },
                {
                  text: 'Right to be presumed innocent until proven guilty beyond reasonable doubt',
                  icon: <PermIdentityIcon />,
                },
                {
                  text: 'Right for equal opportunity employment',
                  icon: <BalanceIcon />,
                },
                {
                  text: 'Right for paid-time-off to be used at the individual’s discretion, sick leave, medical leave, and maternity leave',
                  icon: <VillaIcon />,
                },
                {
                  text: 'Right for healthcare',
                  icon: <LocalHospitalIcon />,
                },
                {
                  text: 'Right for free education',
                  icon: <SchoolIcon />,
                },
                {
                  text: 'Right to leave to any Imperial Planet under the borders of The Imperium, and the right to leave The Imperium to another Galactic Country',
                  icon: <CropFreeIcon />,
                },
                {
                  text: 'Right to be associated with an Imperial Planet, and under the Imperial Planet to be associated with a Planetary Country',
                  icon: <VpnLockIcon />,
                },
                {
                  text: 'Right to marry any full age individual with consent from both individuals',
                  icon: <FavoriteIcon />,
                },
                {
                  text: 'Right to freedom of thought',
                  icon: <LightbulbIcon />,
                },
                {
                  text: 'Right to privacy',
                  icon: <PrivacyTipIcon />,
                },
              ].map((e, i) => (
                <ListItem key={i} className='gov-bor'>
                  <ListItemIcon>{e.icon}</ListItemIcon>
                  <ListItemText primary={e.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}
          className='government-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: '#000000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h1'
              color={theme.palette.error.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='gov-sign5'
            >
              <strong>C2/C3</strong>
            </Typography>
            <Typography
              variant='h3'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='gov-sign5'
            >
              Freedoms and Groups
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
          }}
          className='government-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              px: theme.spacing(2),
              pt: theme.spacing(0.1),
            }}
          >
            <div
              style={{
                width: '100%',
                position: 'relative',
                marginTop: -600,
              }}
            >
              {['Groups'].map((v, i) => (
                <Typography
                  variant='h4'
                  key={i}
                  sx={{
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: i,
                  }}
                  className='gov-groups-title'
                >
                  {v}
                </Typography>
              ))}
            </div>
            <div
              style={{
                width: '100%',
                position: 'relative',
                marginTop: 40,
              }}
            >
              {[
                'There are a vast amount of groups in the Imperium, but the most common are the Infinity Council, the Red Council, the Handan Council, and the Shanghai Council',
              ].map((v, i) => (
                <Typography
                  variant='h6'
                  key={i}
                  sx={{
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: i,
                  }}
                  className='gov-groups-info'
                >
                  {v}
                </Typography>
              ))}
            </div>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}
          className='government-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: '#000000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h1'
              color={theme.palette.error.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='gov-sign6'
            >
              <strong>D/D1/D2/D3</strong>
            </Typography>
            <Typography
              variant='h3'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='gov-sign6'
            >
              Voting and Comparison
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
          }}
          className='government-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              px: theme.spacing(2),
              pt: theme.spacing(0.1),
            }}
          >
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                width: '100%',
                color: theme.palette.secondary.main,
              }}
              className='gov-voting-txt'
            >
              Citizens of The Imperium have the authority to vote for the
              candidate to represent their Planetary Country. After this,
              representatives (electors) from every level vote for the candidate
              to represent their level.
            </Typography>
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                width: '100%',
                color: theme.palette.error.main,
              }}
              className='gov-voting-txt'
            >
              The United States only uses electors to vote, while The Imperium
              uses both to vote.
            </Typography>
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                width: '100%',
                color: theme.palette.success.main,
              }}
              className='gov-voting-txt'
            >
              Everyone over the age of 18 has the right to vote.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}
          className='government-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.secondary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h1'
              color={theme.palette.error.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='gov-sign7'
            >
              <strong>E</strong>
            </Typography>
            <Typography
              variant='h3'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              color={theme.palette.primary.main}
              className='gov-sign7'
            >
              Organization of Government & Power
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
          }}
          className='government-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              px: theme.spacing(2),
              pt: theme.spacing(0.1),
            }}
          >
            <Typography
              variant='h4'
              sx={{
                textAlign: 'center',
                width: '100%',
                color: theme.palette.secondary.main,
                mt: theme.spacing(1),
              }}
              className='gov-org-txt'
            >
              Executive Branch
            </Typography>
            <Typography
              variant='body1'
              sx={{
                textAlign: 'center',
                width: '100%',
                color: theme.palette.secondary.main,
              }}
              className='gov-org-txt'
            >
              {
                "Instead of being a Democratic Presidency like the United States, the Imperium's Executive Branch is an Elective Monarchy. The Executive Branch has many more checks, most of the new checks from the Judicial Branch. The Executive Branch can appoint members of the cabinet in any court of the Judicial Branch (which is a check on the Judicial Branch), is the main law enforcer (meaning that they are the ones who bring out the laws to the citizens). The Nomjr can also pardon anyone except themselves, and can sign executive orders (which can only be undone by the President or the Judicial Branch)."
              }
            </Typography>
            <Typography
              variant='h4'
              sx={{
                textAlign: 'center',
                width: '100%',
                color: theme.palette.secondary.main,
                mt: theme.spacing(1),
              }}
              className='gov-org-txt'
            >
              Legislative Branch
            </Typography>
            <Typography
              variant='body1'
              sx={{
                textAlign: 'center',
                width: '100%',
                color: theme.palette.secondary.main,
              }}
              className='gov-org-txt'
            >
              {
                'The Legislative Branch basically has the same powers as the United States Congress, including: The Senate can Declare War, Conduct a Trial for Impeachment, Check Appointments, and more. House can charge a person impeachment. But the main function for both is to create laws.'
              }
            </Typography>
            <Typography
              variant='h4'
              sx={{
                textAlign: 'center',
                width: '100%',
                color: theme.palette.secondary.main,
                mt: theme.spacing(1),
              }}
              className='gov-org-txt'
            >
              Judicial Branch
            </Typography>
            <Typography
              variant='body1'
              sx={{
                textAlign: 'center',
                width: '100%',
                color: theme.palette.secondary.main,
              }}
              className='gov-org-txt'
            >
              {
                "Compared to the United States, the Judicial Branch has much more power with Judicial Review directly, and with a step in the law-making process. They can declare a law unconstitutional directly in the lawmaking process, but after the law is passed, they must be asked the question in court. The main duty of the Supreme Court is to interpret the constitutionality of the law, and the entire Judicial Branch's main job is to create precedents."
              }
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}
          className='government-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.secondary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h1'
              color={theme.palette.error.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='gov-sign8'
            >
              <strong>F</strong>
            </Typography>
            <Typography
              variant='h3'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              color={theme.palette.primary.main}
              className='gov-sign8'
            >
              Law Making Process
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
          }}
          className='government-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              px: theme.spacing(2),
              pt: theme.spacing(0.1),
            }}
          >
            <img
              src='/TheImperiumFlow.png'
              alt='ImperiumFlow'
              style={{ width: '99%', marginRight: 'auto', marginLeft: 'auto' }}
              className='imperi-flow'
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
          }}
          className='government-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              px: theme.spacing(2),
              pt: theme.spacing(0.1),
            }}
          >
            <img
              src='/TheUSFlow.png'
              alt='USFlow'
              style={{ height: '99%', marginRight: 'auto', marginLeft: 'auto' }}
              className='us-flow'
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}
          className='government-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: '#000000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h1'
              color={theme.palette.error.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='gov-sign9'
            >
              <strong>G</strong>
            </Typography>
            <Typography
              variant='h3'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='gov-sign9'
            >
              Legal System
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
          }}
          className='government-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              px: theme.spacing(2),
              pt: theme.spacing(0.1),
            }}
          >
            <div
              style={{
                width: '100%',
                position: 'relative',
                marginTop: -600,
              }}
            >
              {[
                'Common Law',
                'Constitutional Law and Statutory Law',
                'Administrative Law/Regulations',
              ].map((v, i) => (
                <Typography
                  variant='h4'
                  key={i}
                  sx={{
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: i,
                  }}
                  className='gov-legal-title'
                >
                  {v}
                </Typography>
              ))}
            </div>
            <div
              style={{
                width: '100%',
                position: 'relative',
                marginTop: 40,
              }}
            >
              {[
                `Common Law is mainly enforced by the Planetary Country's executive branch, however, like the U.S, courts can interpret laws in ways to create stare decisis. Through the lawmaking process, the P.C's legislature can create precedents (using the P.C's judicial and executive branches.)`,
                'Constutional Law is the only law that can be done by a 4/5ths vote from the Chambers of the Imperium and the Judicial Branch. It also needs to be verified by the Executive Branch. Statutes can be created by any legislature in any level, but the higher the level, the more precedent over other statutes.',
                'The Legislative Branch of the level of government that created the law sets the rules and regulations, and the Executive Branch decides how it will be carried out (with support from the cabinet)',
              ].map((v, i) => (
                <Typography
                  variant='h6'
                  key={i}
                  sx={{
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: i,
                  }}
                  className='gov-legal-info'
                >
                  {v}
                </Typography>
              ))}
            </div>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
        }}
        id='econ-section'
        ref={econRef}
      >
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}
          className='econ-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.secondary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h1'
              color={theme.palette.error.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-sign'
            >
              <strong>2</strong>
            </Typography>
            <Typography
              variant='h3'
              color={theme.palette.primary.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-sign'
            >
              THE ECONOMY
            </Typography>
            <Typography
              variant='h5'
              gutterBottom
              color={theme.palette.primary[200]}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-sign'
            >
              of the Imperium
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
          }}
          className='econ-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h5'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-type'
            >
              {"The Imperium's economy is"}
            </Typography>
            <Typography
              variant='h5'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-type'
              color={theme.palette.success.main}
            >
              {'MIXED!'}
            </Typography>
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-type'
              color={theme.palette.secondary.main}
            >
              {
                'This means that there will be elements that are owned by the government (public sector), and elements owned by organizations/companies (private sector).'
              }
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}
          className='econ-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: '#000000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h1'
              color={theme.palette.error.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-sign2'
            >
              <strong>A1/A2</strong>
            </Typography>
            <Typography
              variant='h3'
              color={theme.palette.primary.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-sign2'
            >
              Transportation/Media
            </Typography>
            <Typography
              variant='h5'
              gutterBottom
              color={theme.palette.primary[200]}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-sign2'
            >
              of the Imperium
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
          }}
          className='econ-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: theme.spacing(3),
            }}
          >
            <Typography
              variant='h4'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-media'
            >
              {'Transportation'}
            </Typography>
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-media'
              color={theme.palette.success.main}
            >
              {'Transportation is run by both the public and private sector;'}
            </Typography>
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-media'
              color={theme.palette.secondary.main}
              gutterBottom
            >
              {'both of which may create transportation.'}
            </Typography>
            <img
              src='/spaceship.webp'
              style={{
                maxWidth: '50%',
                maxHeight: '25%',
                margin: '0 auto',
                marginBottom: theme.spacing(1),
                borderRadius: 90,
                boxShadow: '2px 2px 16px black',
              }}
              alt='spaceship'
              className='econ-media'
            />
            <Typography
              variant='h4'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-media'
            >
              {'Media/Communication Networks'}
            </Typography>
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-media'
              color={theme.palette.success.main}
            >
              {
                'Media/Communication is also run by both the public and private sector, however they both broadcast different TV.'
              }
            </Typography>
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-media'
              color={theme.palette.secondary.main}
              gutterBottom
            >
              {
                'The Government only broadcasts Official TV wherein political affairs are informed. The Private Sector can create other media/communication networks, or they may present viewpoints to Official Political Affairs (they can take the information presented by Official TV or other Official sources and interpret in their own ways, if they would like to do so.)'
              }
            </Typography>
            <img
              src='/movie.webp'
              style={{
                maxWidth: '50%',
                maxHeight: '25%',
                margin: '0 auto',
                borderRadius: 90,
                boxShadow: '2px 2px 16px black',
              }}
              alt='spaceship'
              className='econ-media'
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}
          className='econ-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: '#808080',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h1'
              color={theme.palette.error.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-sign3'
            >
              <strong>A3/A4/A5</strong>
            </Typography>
            <Typography
              variant='h3'
              color={theme.palette.primary.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-sign3'
            >
              Healthcare, Revenue
            </Typography>
            <Typography
              variant='h5'
              gutterBottom
              color={theme.palette.primary[200]}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-sign3'
            >
              & Services Compared to the U.S.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
          }}
          className='econ-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: theme.spacing(3),
            }}
          >
            <div
              style={{
                width: '100%',
                position: 'relative',
                marginTop: -600,
              }}
            >
              {['Health Care', 'Imperium vs U.S', 'Revenue'].map((v, i) => (
                <Typography
                  variant='h4'
                  key={i}
                  sx={{
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: i,
                  }}
                  className='econ-health-title'
                >
                  {v}
                </Typography>
              ))}
            </div>
            <div
              style={{
                width: '100%',
                position: 'relative',
                marginTop: 40,
              }}
            >
              {[
                'Health Care is available for both the public and private sector',
                '(In Services Offered)',
                'The main form of revenue for the government of The Imperium is net-exports.',
              ].map((v, i) => (
                <Typography
                  variant='h5'
                  key={i}
                  sx={{
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: i,
                  }}
                  className='econ-health-caption'
                  color={theme.palette.success.main}
                >
                  {v}
                </Typography>
              ))}
            </div>
            <div
              style={{
                width: '100%',
                position: 'relative',
                marginTop: 60,
              }}
            >
              {[
                "There are government-owned hospitals that are free for all citizens and have top-quality healthcare. The private sector may also create hospitals. The reason there are hospitals in both the Private Sector and the Public Sector is to boost the economy in other industries by decreasing debt in the healthcare industry. Private Hospitals don't have an advantage in this case because the Public Sector will always have an advantage in price, which measn that the Private Sector would have to compete in quality. This forces them to adhere to top-class standards to stay in business.",
                'Many services are provided to the Citizens of The Imperium, including but not limited to: Social Security, Retirement Benefits, Food Assistance, Death Benefits, and more. Everything that the United States offers is provided to citizens.',
                'The Imperium is entirely self-sustained in forms of essential amenities, and almost self-sustained in forms of not-life-crucical goods. Because The Imperium is so massive, it generates many excess goods that are valuable to other Galactic Countries in the Intergalactic Trade Organization. The Federal Government will not (and can never) collect taxes and taxes can only be collected by Planetary Countries.',
              ].map((v, i) => (
                <Typography
                  variant='body1'
                  key={i}
                  sx={{
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: i,
                  }}
                  className='econ-health-info'
                  color={theme.palette.secondary.main}
                >
                  {v}
                </Typography>
              ))}
            </div>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}
          className='econ-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: '#636363',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h1'
              color={theme.palette.error.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-sign4'
            >
              <strong>B1/B2</strong>
            </Typography>
            <Typography
              variant='h3'
              color={theme.palette.primary.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-sign4'
            >
              Significant Industries & The Education
            </Typography>
            <Typography
              variant='h5'
              gutterBottom
              color={theme.palette.primary[200]}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-sign4'
            >
              of The Imperium
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
          }}
          className='econ-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: theme.spacing(3),
            }}
          >
            <div
              style={{
                width: '100%',
                position: 'relative',
                marginTop: -200,
              }}
            >
              {['Significant Industries', 'Education'].map((v, i) => (
                <Typography
                  variant='h4'
                  key={i}
                  sx={{
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: i,
                  }}
                  className='econ-edu-title'
                >
                  {v}
                </Typography>
              ))}
            </div>
            <div
              style={{
                width: '100%',
                position: 'relative',
                marginTop: 40,
              }}
            >
              {[
                'The most significant industry in The Imperium is the IT industry.',
                'The education system is all in person.',
              ].map((v, i) => (
                <Typography
                  variant='h5'
                  key={i}
                  sx={{
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: i,
                  }}
                  className='econ-edu-caption'
                  color={theme.palette.success.main}
                >
                  {v}
                </Typography>
              ))}
            </div>
            <div
              style={{
                width: '100%',
                position: 'relative',
                marginTop: 40,
              }}
            >
              {[
                'Because all dangerous jobs are handled by automatons, there is a huge demand for technicians of these automatons. Houses of Citizens usually contain at least 3 robots, where each of them must be maintained at least once a fiscal quarter due to economic reasons.',
                'The teacher stays with you from the 0th year (around 5-6 years old is the 0th year) and goes all the way to the 9th year (14-15 years old). After this, regular school is not mandatory and instead an individual can choose to go to job school, where the task is to intern in the public/private sector to gain valuable experience for your job. After becoming a full age individual, many citizens have 2-3 years of experience. Citizens that skip grades have much more experience. Teachers have a small class with a maximum of up to 12 people. Because of this, there is an extremely high demand for teachers. The Imperium pays the teachers a base pay of 3 times minimum wage per hour, and they also get 0.1% of the annual tax (paid to Planetary Countries by each person) they have educated.',
              ].map((v, i) => (
                <Typography
                  variant='body1'
                  key={i}
                  sx={{
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: i,
                  }}
                  className='econ-edu-info'
                  color={theme.palette.secondary.main}
                >
                  {v}
                </Typography>
              ))}
            </div>
            <div
              style={{
                position: 'relative',
                marginTop: 250,
                width: '100%',
                height: '50%',
                // maxWidth: '50%',
                // maxHeight: '25%',
              }}
            >
              {['/robots.jpg', '/finland-edu.jpg'].map((v, i) => (
                <img
                  key={i}
                  src={v}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: i,
                    borderRadius: 90,
                    boxShadow: '2px 2px 16px black',
                    maxWidth: '50%',
                    maxHeight: '50%',
                    margin: 'auto',
                  }}
                  alt={v}
                  className='econ-edu-media'
                />
              ))}
            </div>
            <div
              style={{
                width: '100%',
                position: 'relative',
                marginTop: -200,
              }}
            >
              {[
                'Robots Cleaning a Citizens House',
                "(Recognize the education system? It's modeled after Finland's education system!)",
              ].map((v, i) => (
                <Typography
                  variant='body2'
                  key={i}
                  sx={{
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: i,
                  }}
                  className='econ-edu-media-caption'
                  color={theme.palette.success.main}
                >
                  {v}
                </Typography>
              ))}
            </div>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}
          className='econ-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: '#222222',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h1'
              color={theme.palette.error.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-sign5'
            >
              <strong>C</strong>
            </Typography>
            <Typography
              variant='h3'
              color={theme.palette.primary.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-sign5'
            >
              Environment Regulation
            </Typography>
            <Typography
              variant='h5'
              gutterBottom
              color={theme.palette.primary[200]}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-sign5'
            >
              in The Imperium
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
          }}
          className='econ-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: theme.spacing(3),
            }}
          >
            <Typography
              variant='h4'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-env'
            >
              {'Environment & Regulations'}
            </Typography>
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='econ-env'
              color={theme.palette.secondary.main}
            >
              {
                "The Imperium's Federal Government gives funding to the Planetary Countries for subsidies given to the private sector and also funding for governmental projects to support the environment. Planetary Countries shall also advocate for the environment by pushing it into education at an early age. "
              }
            </Typography>
            <Grid
              container
              spacing={3}
              sx={{
                width: '100%',
                maxHeight: '50%',
                mt: theme.spacing(3),
              }}
            >
              <Grid item md={6} sm={12} className='econ-env'>
                <Card
                  sx={{
                    minWidth: 275,
                    boxShadow: '5px 5px 16px black',
                  }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color='text.secondary'
                      gutterBottom
                    >
                      The Imperium regulates businesses by:
                    </Typography>
                    <Typography variant='h5' component='div'>
                      Subsidies and Laws
                    </Typography>
                    <Typography variant='body2'>
                      Subsidies are when The Imperium pays businesses to be
                      eco-friendly.
                      <br />
                      Laws are passed to prevent businesses from commiting acts
                      that would environmentally affect people.
                      <br />
                      {
                        '"One shall not compete with another business by using environmental pressure"'
                      }
                      - <strong>Fair Competition Act of 3344</strong>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                md={6}
                sm={12}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  // alignItems: 'center',
                  flexDirection: 'row',
                }}
                className='econ-env'
              >
                <img
                  src='/environment.jpg'
                  style={{
                    maxWidth: '100%',
                    maxHeight: '75%',
                    borderRadius: 90,
                    boxShadow: '2px 2px 16px black',
                  }}
                  alt='environment'
                  className='econ-media'
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
        }}
        id='map-section'
        ref={mapRef}
      >
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}
          className='map-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: '#141414',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h1'
              color={theme.palette.error.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='map-sign'
            >
              <strong>3</strong>
            </Typography>
            <Typography
              variant='h3'
              color={theme.palette.primary.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='map-sign'
            >
              THE MAP AND CULTURE
            </Typography>
            <Typography
              variant='h5'
              gutterBottom
              color={theme.palette.primary[200]}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='map-sign'
            >
              of the Imperium
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
          }}
          className='map-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <img
              src='/imperimap.jpg'
              alt='Imperium Map'
              style={{
                width: '99%',
                marginRight: 'auto',
                marginLeft: 'auto',
                borderRadius: 90,
                boxShadow: '2px 2px 16px black',
              }}
              className='imperi-map'
            />
            <Typography
              variant='h4'
              sx={{
                textAlign: 'center',
                width: '100%',
                mt: theme.spacing(2),
              }}
              className='imperi-map'
              color={theme.palette.success.main}
              onClick={() => {
                alert('I meant with your browser...');
              }}
            >
              Zoom in!
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}
          className='map-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: '#000000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h1'
              color={theme.palette.error.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='map-sign2'
            >
              <strong>A/B</strong>
            </Typography>
            <Typography
              variant='h3'
              color={theme.palette.primary.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='map-sign2'
            >
              The Holidays, Music, and Athletics
            </Typography>
            <Typography
              variant='h5'
              gutterBottom
              color={theme.palette.primary[200]}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='map-sign2'
            >
              of the Imperium
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
          }}
          className='map-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: theme.spacing(3),
            }}
          >
            <Grid
              container
              spacing={3}
              sx={{
                width: '100%',
                maxHeight: '75%',
                mt: theme.spacing(3),
              }}
            >
              <Grid item sm={6} className='map-music'>
                <Card
                  sx={{
                    minWidth: 396,
                    maxWidth: 396,
                    boxShadow: '5px 5px 16px black',
                    m: '0 auto',
                  }}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image='/crown.jpg'
                    title='crown'
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color='text.secondary'
                      gutterBottom
                    >
                      Holiday
                    </Typography>
                    <Typography variant='h5' component='div'>
                      Ascendance Day
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                      January 1st
                    </Typography>
                    <Typography variant='body2'>
                      Celebrated for the coronation of the Nomjr
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={6} className='map-music'>
                <Card
                  sx={{
                    minWidth: 396,
                    maxWidth: 396,
                    m: '0 auto',
                    boxShadow: '5px 5px 16px black',
                  }}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image='/anti-slack-day.avif'
                    title='anti slack'
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color='text.secondary'
                      gutterBottom
                    >
                      Holiday
                    </Typography>
                    <Typography variant='h5' component='div'>
                      Anti-Slack Day
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                      March 14th
                    </Typography>
                    <Typography variant='body2'>
                      Day to recognize all workers
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={6} className='map-music'>
                <Card
                  sx={{
                    minWidth: 396,
                    maxWidth: 396,
                    boxShadow: '5px 5px 16px black',
                    m: '0 auto',
                  }}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image='/milkygenre.jpg'
                    title='milky genre'
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color='text.secondary'
                      gutterBottom
                    >
                      Music
                    </Typography>
                    <Typography variant='h5' component='div'>
                      Milky Genre
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                      (Mix of Hip Hop and Rock)
                    </Typography>
                    <Typography variant='body2'>
                      The Main Genre of Music in The Imperium
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={6} className='map-music'>
                <Card
                  sx={{
                    minWidth: 396,
                    maxWidth: 396,
                    boxShadow: '5px 5px 16px black',
                    m: '0 auto',
                  }}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image='/planetjumping.jpg'
                    title='planet jumping'
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color='text.secondary'
                      gutterBottom
                    >
                      Athletics
                    </Typography>
                    <Typography variant='h5' component='div'>
                      Planet Jumping
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                      Measurement is Planets!
                    </Typography>
                    <Typography variant='body2'>
                      {
                        "It's the main sport in The Imperium. It's literally just jumping"
                      }
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}
          className='map-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: '#000000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h1'
              color={theme.palette.error.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='map-sign3'
            >
              <strong>C/D/E/F</strong>
            </Typography>
            <Typography
              variant='h3'
              color={theme.palette.primary.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='map-sign3'
            >
              Food, Religion, and Family
            </Typography>
            <Typography
              variant='h5'
              gutterBottom
              color={theme.palette.primary[200]}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='map-sign3'
            >
              of the Imperium
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
          }}
          className='map-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: theme.spacing(3),
            }}
          >
            <Grid
              container
              spacing={3}
              sx={{
                width: '100%',
                maxHeight: '75%',
                mt: theme.spacing(3),
              }}
            >
              <Grid item sm={6} className='map-food'>
                <Card
                  sx={{
                    minWidth: 396,
                    maxWidth: 396,
                    boxShadow: '5px 5px 16px black',
                    m: '0 auto',
                  }}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image='/naan.jpg'
                    title='naan'
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color='text.secondary'
                      gutterBottom
                    >
                      Food
                    </Typography>
                    <Typography variant='h5' component='div'>
                      Butter Flatbread
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                      (Many other foods available)
                    </Typography>
                    <Typography variant='body2'>
                      Butter Flatbread is the most common food for space travel.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={6} className='map-food'>
                <Card
                  sx={{
                    minWidth: 396,
                    maxWidth: 396,
                    boxShadow: '5px 5px 16px black',
                    m: '0 auto',
                  }}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image='/verity.avif'
                    title='verity'
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color='text.secondary'
                      gutterBottom
                    >
                      Religion
                    </Typography>
                    <Typography variant='h5' component='div'>
                      Verity
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                      Most Practiced
                    </Typography>
                    <Typography variant='body2'>
                      No Religion endorsed, but most common is Verity
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={12} className='map-food'>
                <Card
                  sx={{
                    minWidth: 396,
                    maxWidth: 396,
                    boxShadow: '5px 5px 16px black',
                    m: '0 auto',
                  }}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image='/family.jpg'
                    title='family'
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color='text.secondary'
                      gutterBottom
                    >
                      Family
                    </Typography>
                    <Typography variant='h5' component='div'>
                      4 People
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                      Most Common
                    </Typography>
                    <Typography variant='body2'>
                      In The Imperium, the most common family consists of 4
                      people, but there is a wide variety of family densities.
                      All families are extremely diverse, with some families
                      having people that are a percentage of every race!
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}
          className='map-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: '#000000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h1'
              color={theme.palette.error.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='map-sign4'
            >
              <strong>G/H</strong>
            </Typography>
            <Typography
              variant='h3'
              color={theme.palette.primary.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='map-sign4'
            >
              Symbols & History
            </Typography>
            <Typography
              variant='h5'
              gutterBottom
              color={theme.palette.primary[200]}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='map-sign4'
            >
              of the Imperium
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
          }}
          className='map-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: theme.spacing(3),
            }}
          >
            <Typography
              variant='h4'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='map-symbols'
            >
              {'Symbols'}
            </Typography>
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='map-symbols'
              gutterBottom
              color={theme.palette.secondary.main}
            >
              Symbols that represent The Imperium are:
              <br />
              The Dual Sided Eagle The Black Crown
            </Typography>
            <Typography
              variant='h4'
              sx={{
                textAlign: 'center',
                width: '100%',
                mt: theme.spacing(1),
              }}
              className='map-symbols'
            >
              {'History'}
            </Typography>
            <Typography
              variant='body1'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='map-symbols'
              color={theme.palette.secondary.main}
            >
              By the year 2500, the Little Blue Planet had discovered life forms
              that had not been caught by its earlier telescopes.
            </Typography>
            <Typography
              variant='body1'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='map-symbols'
              color={theme.palette.secondary.main}
            >
              After finding out that aliens really did exist, the Little Blue
              Planet was in an outrage{' '}
              <i>
                “Were we the aliens all along?? Anyways, we better maintain
                relations unless we want to get destroyed.”
              </i>
            </Typography>
            <Typography
              variant='body1'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='map-symbols'
              color={theme.palette.secondary.main}
            >
              But these <i>other planets</i> didn’t have the habit of colluding
              with others; instead they were in a rivalry and wanted to destroy
              each other as soon as possible.
            </Typography>
            <Typography
              variant='body1'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='map-symbols'
              color={theme.palette.secondary.main}
            >
              Earth slowly started the diplomacy process, an unheard of
              technique that actually worked. Earth soon became the ally of all
              planets, and Earth worked with all the planets to create an
              alliance.
            </Typography>
            <Typography
              variant='body1'
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
              className='map-symbols'
              color={theme.palette.secondary.main}
            >
              This alliance soon formed into the basis of a structure for the
              Milky Way Galaxy, the only Galaxy that didn’t have any major
              government already. Developments happened, and finally, we get{' '}
              <strong>The Imperium.</strong>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
        }}
        id='video'
        ref={videoRef}
      >
        <Box
          sx={{
            width: '100vw',
            flexShrink: 0,
            overflow: 'hidden',
          }}
          className='video-slide'
        >
          <Box
            sx={{
              height: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h1'
              color={theme.palette.error.main}
              sx={{
                textAlign: 'center',
                width: '100%',
              }}
            >
              View The Video Below!
            </Typography>
            <Card
              sx={{
                width: '55%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                p: theme.spacing(3),
                borderRadius: 15,
                backgroundColor: '#000000',
                color: '#000000',
                boxShadow: '5px 5px 16px black',
              }}
            >
              <video width='100%' controls>
                <source
                  src={
                    window.location.href.includes('github')
                      ? 'https://github.com/imperiumgov/imperiumgov.github.io/raw/main/TheImperiPropaganda.mov'
                      : '/TheImperiPropaganda.mov'
                  }
                />
              </video>
            </Card>
          </Box>
        </Box>
      </Box>
    </ReactLenis>
  );
};

export default IndexPage;
