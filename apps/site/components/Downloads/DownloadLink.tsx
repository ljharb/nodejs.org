'use client';

import type { FC, PropsWithChildren } from 'react';

import { useClientContext } from '@/hooks';
import type { NodeRelease } from '@/types';
import { getNodeDownloadUrl } from '@/util/getNodeDownloadUrl';

type DownloadLinkProps = { release: NodeRelease };

const DownloadLink: FC<PropsWithChildren<DownloadLinkProps>> = ({
  release: { versionWithPrefix },
  children,
}) => {
  const { os, bitness } = useClientContext();
  const downloadLink = getNodeDownloadUrl(versionWithPrefix, os, bitness);

  return <a href={downloadLink}>{children}</a>;
};

export default DownloadLink;
