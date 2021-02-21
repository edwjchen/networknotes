import React, { useState, useRef } from 'react';

import { useParams, Link } from 'react-router-dom';
import { Breadcrumb, Typography, Divider, Tag } from 'antd';
import { HomeOutlined, FileOutlined } from '@ant-design/icons';

import {
  Editor,
  createEditorState,
  BLOCK_BUTTONS,
  INLINE_BUTTONS,
} from 'medium-draft';
import 'medium-draft/lib/index.css';

import './EditorPage.css';
import { HeavyText } from './utils/CustomText';
import Layout from './Layout';
import Bread from './Bread';

const { Text, Paragraph, Title } = Typography;

function EditorBlock({ ref, data, onChange }) {
  return (
    <Editor
      ref={ref}
      editorState={data}
      onChange={onChange}
      blockButtons={BLOCK_BUTTONS}
      inlineButtons={INLINE_BUTTONS}
    />
  );
}

function SideDisplay() {
  return (
    <>
      <Bread>
        <FileOutlined />
      </Bread>
      <Divider dashed />
      <Typography>
        <Title level={3}>Introduction to Machine Learning</Title>
      </Typography>
      <Typography>
        <Paragraph>
          <HeavyText>Last Edited:</HeavyText> <Text> Apr 25, 2021</Text>
        </Paragraph>
      </Typography>
      <Divider dashed />
      <div>
        <Typography>
          <Title level={4}>Keywords</Title>
        </Typography>
        <Tag>CNN</Tag>
        <Tag>RNN</Tag>
      </div>
    </>
  );
}

export default function EditorPage() {
  const [data, setData] = useState(createEditorState());
  const ref = useRef(null);
  const { id } = useParams();

  const onChange = (editorState) => {
    // console.log(editorState.getCurrentContent().getPlainText());
    setData(editorState);
  };

  return (
    <Layout Sidebar={<SideDisplay />}>
      <EditorBlock ref={ref} data={data} onChange={onChange} />
    </Layout>
  );
}
