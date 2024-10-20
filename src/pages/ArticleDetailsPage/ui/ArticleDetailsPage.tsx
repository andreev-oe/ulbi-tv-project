import { memo, useCallback } from 'react';

import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentFormLazy } from 'features/addNewCommentForm';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';

import { articleDetailsCommentsIsLoadingSelector } from '../model/selectors/comments';
import { articleDetailsRecommendationsIsLoadingSelector } from '../model/selectors/recommendations';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsSelector } from '../model/slices/articleDetailsCommentsSlice';
import { articleDetailsPageRecommendationsSelector } from '../model/slices/articleDetailsPageRecommendationsSlice';

import Styles from './ArticleDetailsPage.module.scss';

const reducers: TReducersList = {
    articleDetailsPageSchema: articleDetailsPageReducer,
};

export const ArticleDetailsPage = memo(() => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(articleDetailsCommentsSelector.selectAll);
    const recommendations = useSelector(articleDetailsPageRecommendationsSelector.selectAll);
    const isLoading = useSelector(articleDetailsCommentsIsLoadingSelector);
    const recommendationsIsLoading = useSelector(articleDetailsRecommendationsIsLoadingSelector);
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, []);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return <div>{t('Статья не найдена')}</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={Styles.ArticleDetailsPage}>
                <Button className={Styles.backButton} theme={EButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id={id} />
                <Text className={Styles.commentTitle} title={t('Рекомендуем')} />
                <ArticleList articles={recommendations} isLoading={recommendationsIsLoading} />
                <Text className={Styles.commentTitle} title={t('Комментарии')} />
                <AddCommentFormLazy onSendComment={onSendComment} />
                <CommentList isLoading={isLoading} comments={comments} />
            </Page>
        </DynamicModuleLoader>
    );
});

ArticleDetailsPage.displayName = 'ArticleDetailsPage';
