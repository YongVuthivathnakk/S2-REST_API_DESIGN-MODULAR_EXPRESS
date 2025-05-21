import journalists from '../models/journalistModel.js';
import articles from '../models/articleModel.js';

export const getAllJournalists = (req, res) => {
  res.json(journalists);
};

export const getJournalistById = (req, res) => {
  const id = parseInt(req.params.id);
  const journalist = journalists.find(j => j.id === id);
  if (!journalist) return res.status(404).json({ error: 'Journalist not found' });
  res.json(journalist);
};

export const createJournalist = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });

  const newJournalist = {
    id: journalists.length + 1,
    name
  };

  journalists.push(newJournalist);
  res.status(201).json(newJournalist);
};

export const updateJournalist = (req, res) => {
  const id = parseInt(req.params.id);
  const journalist = journalists.find(j => j.id === id);
  if (!journalist) return res.status(404).json({ error: 'Journalist not found' });

  const { name } = req.body;
  if (name) journalist.name = name;

  res.json(journalist);
};

export const deleteJournalist = (req, res) => {
  const id = parseInt(req.params.id);
  const index = journalists.findIndex(j => j.id === id);
  if (index === -1) return res.status(404).json({ error: 'Journalist not found' });

  journalists.splice(index, 1);
  res.status(204).send();
};

export const getArticlesByJournalist = (req, res) => {
  const journalistId = parseInt(req.params.id);
  const relatedArticles = articles.filter(a => a.journalistId === journalistId);
  res.json(relatedArticles);
};
