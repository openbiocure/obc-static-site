'use client';

import { useEffect, useRef } from 'react';
import { dia, shapes } from '@joint/core';

interface ArchitectureDiagramProps {
  className?: string;
}

export default function ArchitectureDiagram({ className = '' }: ArchitectureDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const paperRef = useRef<dia.Paper | null>(null);
  const graphRef = useRef<dia.Graph | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create a new graph
    const graph = new dia.Graph();
    graphRef.current = graph;

    // Create a new paper
    const paper = new dia.Paper({
      el: containerRef.current,
      model: graph,
      width: 900,
      height: 500,
      gridSize: 10,
      drawGrid: false,
      background: {
        color: 'transparent'
      },
      interactive: false
    });
    paperRef.current = paper;

    // Define isometric shapes with 3D effects
    const IsometricDataSource = dia.Element.define('IsometricDataSource', {
      attrs: {
        body: {
          refWidth: '100%',
          refHeight: '100%',
          strokeWidth: 2,
          stroke: '#3B82F6',
          fill: '#EFF6FF',
          rx: 4,
          ry: 4
        },
        top: {
          refWidth: '100%',
          refHeight: '100%',
          strokeWidth: 2,
          stroke: '#2563EB',
          fill: '#DBEAFE',
          rx: 4,
          ry: 4,
          transform: 'skewX(-30deg) translateY(-15px)'
        },
        right: {
          refWidth: '100%',
          refHeight: '100%',
          strokeWidth: 2,
          stroke: '#1D4ED8',
          fill: '#BFDBFE',
          rx: 4,
          ry: 4,
          transform: 'skewY(30deg) translateX(15px)'
        },
        label: {
          refX: '50%',
          refY: '50%',
          textAnchor: 'middle',
          textVerticalAnchor: 'middle',
          fontSize: 14,
          fontWeight: 700,
          fill: '#1E40AF',
          transform: 'translateY(-5px)'
        }
      }
    }, {
      markup: [{
        tagName: 'rect',
        selector: 'right'
      }, {
        tagName: 'rect',
        selector: 'top'
      }, {
        tagName: 'rect',
        selector: 'body'
      }, {
        tagName: 'text',
        selector: 'label'
      }]
    });

    const IsometricProcessingNode = dia.Element.define('IsometricProcessingNode', {
      attrs: {
        body: {
          refWidth: '100%',
          refHeight: '100%',
          strokeWidth: 2,
          stroke: '#10B981',
          fill: '#ECFDF5',
          rx: 3,
          ry: 3
        },
        top: {
          refWidth: '100%',
          refHeight: '100%',
          strokeWidth: 2,
          stroke: '#059669',
          fill: '#D1FAE5',
          rx: 3,
          ry: 3,
          transform: 'skewX(-30deg) translateY(-12px)'
        },
        right: {
          refWidth: '100%',
          refHeight: '100%',
          strokeWidth: 2,
          stroke: '#047857',
          fill: '#A7F3D0',
          rx: 3,
          ry: 3,
          transform: 'skewY(30deg) translateX(12px)'
        },
        label: {
          refX: '50%',
          refY: '50%',
          textAnchor: 'middle',
          textVerticalAnchor: 'middle',
          fontSize: 12,
          fontWeight: 700,
          fill: '#065F46',
          transform: 'translateY(-3px)'
        }
      }
    }, {
      markup: [{
        tagName: 'rect',
        selector: 'right'
      }, {
        tagName: 'rect',
        selector: 'top'
      }, {
        tagName: 'rect',
        selector: 'body'
      }, {
        tagName: 'text',
        selector: 'label'
      }]
    });

    const IsometricStorageNode = dia.Element.define('IsometricStorageNode', {
      attrs: {
        body: {
          refWidth: '100%',
          refHeight: '100%',
          strokeWidth: 2,
          stroke: '#F59E0B',
          fill: '#FFFBEB',
          rx: 3,
          ry: 3
        },
        top: {
          refWidth: '100%',
          refHeight: '100%',
          strokeWidth: 2,
          stroke: '#D97706',
          fill: '#FEF3C7',
          rx: 3,
          ry: 3,
          transform: 'skewX(-30deg) translateY(-12px)'
        },
        right: {
          refWidth: '100%',
          refHeight: '100%',
          strokeWidth: 2,
          stroke: '#B45309',
          fill: '#FDE68A',
          rx: 3,
          ry: 3,
          transform: 'skewY(30deg) translateX(12px)'
        },
        label: {
          refX: '50%',
          refY: '50%',
          textAnchor: 'middle',
          textVerticalAnchor: 'middle',
          fontSize: 12,
          fontWeight: 700,
          fill: '#92400E',
          transform: 'translateY(-3px)'
        }
      }
    }, {
      markup: [{
        tagName: 'rect',
        selector: 'right'
      }, {
        tagName: 'rect',
        selector: 'top'
      }, {
        tagName: 'rect',
        selector: 'body'
      }, {
        tagName: 'text',
        selector: 'label'
      }]
    });

    const IsometricOutputNode = dia.Element.define('IsometricOutputNode', {
      attrs: {
        body: {
          refWidth: '100%',
          refHeight: '100%',
          strokeWidth: 2,
          stroke: '#8B5CF6',
          fill: '#F3F4F6',
          rx: 4,
          ry: 4
        },
        top: {
          refWidth: '100%',
          refHeight: '100%',
          strokeWidth: 2,
          stroke: '#7C3AED',
          fill: '#EDE9FE',
          rx: 4,
          ry: 4,
          transform: 'skewX(-30deg) translateY(-15px)'
        },
        right: {
          refWidth: '100%',
          refHeight: '100%',
          strokeWidth: 2,
          stroke: '#6D28D9',
          fill: '#DDD6FE',
          rx: 4,
          ry: 4,
          transform: 'skewY(30deg) translateX(15px)'
        },
        label: {
          refX: '50%',
          refY: '50%',
          textAnchor: 'middle',
          textVerticalAnchor: 'middle',
          fontSize: 14,
          fontWeight: 700,
          fill: '#5B21B6',
          transform: 'translateY(-5px)'
        }
      }
    }, {
      markup: [{
        tagName: 'rect',
        selector: 'right'
      }, {
        tagName: 'rect',
        selector: 'top'
      }, {
        tagName: 'rect',
        selector: 'body'
      }, {
        tagName: 'text',
        selector: 'label'
      }]
    });

    // Create nodes with isometric positioning
    const pubmed = new IsometricDataSource({
      position: { x: 80, y: 180 },
      size: { width: 140, height: 70 },
      attrs: {
        label: { text: 'PubMed' }
      }
    });

    const sdk = new IsometricProcessingNode({
      position: { x: 280, y: 180 },
      size: { width: 120, height: 60 },
      attrs: {
        label: { text: 'SDK' }
      }
    });

    const minio = new IsometricStorageNode({
      position: { x: 460, y: 180 },
      size: { width: 120, height: 60 },
      attrs: {
        label: { text: 'MinIO' }
      }
    });

    const spark = new IsometricProcessingNode({
      position: { x: 640, y: 180 },
      size: { width: 120, height: 60 },
      attrs: {
        label: { text: 'Spark' }
      }
    });

    const llm = new IsometricProcessingNode({
      position: { x: 460, y: 300 },
      size: { width: 120, height: 60 },
      attrs: {
        label: { text: 'LLM' }
      }
    });

    const agent = new IsometricProcessingNode({
      position: { x: 640, y: 300 },
      size: { width: 120, height: 60 },
      attrs: {
        label: { text: 'Agent\nPlatform' }
      }
    });

    const chat = new IsometricOutputNode({
      position: { x: 820, y: 240 },
      size: { width: 140, height: 70 },
      attrs: {
        label: { text: 'Chat' }
      }
    });

    // Add nodes to graph
    graph.addCells([pubmed, sdk, minio, spark, llm, agent, chat]);

    // Create 3D-style connections with shadows
    const createIsometricLink = (source: dia.Element, target: dia.Element, label?: string) => {
      const link = new shapes.standard.Link({
        source: { id: source.id },
        target: { id: target.id },
        attrs: {
          line: {
            stroke: '#4B5563',
            strokeWidth: 3,
            targetMarker: {
              type: 'path',
              d: 'M 12 -6 0 0 12 6 z',
              fill: '#4B5563'
            },
            shadowColor: '#000000',
            shadowBlur: 4,
            shadowOffsetX: 2,
            shadowOffsetY: 2
          }
        },
        labels: label ? [{
          position: 0.5,
          attrs: {
            label: {
              text: label,
              fontSize: 11,
              fill: '#374151',
              fontWeight: 600,
              textBackground: {
                fill: '#F9FAFB',
                stroke: '#E5E7EB',
                strokeWidth: 1,
                rx: 3,
                ry: 3
              },
              textBorder: {
                stroke: '#E5E7EB',
                strokeWidth: 1
              }
            }
          }
        }] : []
      });
      return link;
    };

    // Add connections with isometric flow
    graph.addCells([
      createIsometricLink(pubmed, sdk, 'Data'),
      createIsometricLink(sdk, minio, 'Store'),
      createIsometricLink(minio, spark, 'Process'),
      createIsometricLink(spark, llm, 'Analyze'),
      createIsometricLink(llm, agent, 'Reason'),
      createIsometricLink(agent, chat, 'Response'),
      createIsometricLink(minio, llm, 'Retrieve')
    ]);

    // Center the diagram
    paper.fitToContent({ padding: 30 });

    return () => {
      if (paperRef.current) {
        paperRef.current.remove();
      }
    };
  }, []);

  return (
    <div className={`w-full max-w-5xl mx-auto ${className}`}>
      <div 
        ref={containerRef} 
        className="w-full h-[500px] border border-gray-200 rounded-lg bg-gradient-to-br from-gray-50 to-blue-50 shadow-lg"
      />
    </div>
  );
} 

