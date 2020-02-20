from wagtail.api.v2.router import WagtailAPIRouter

from .views import CustomPagesAPIEndpoint, CustomImagesAPIEndpoint, CustomDocumentsAPIEndpoint, PagePreviewAPIEndpoint
 
# Init the Wagtail Router
api_router = WagtailAPIRouter('wagtailapi')
 
api_router.register_endpoint('page_preview', PagePreviewAPIEndpoint)
api_router.register_endpoint('pages', CustomPagesAPIEndpoint)
api_router.register_endpoint('images', CustomImagesAPIEndpoint)
api_router.register_endpoint('documents', CustomDocumentsAPIEndpoint)
